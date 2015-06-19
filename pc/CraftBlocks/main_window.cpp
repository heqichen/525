#include <QtWidgets>

#include "main_window.h"
#include "ui_main_window.h"
#include "cb_panel_portview_controller.h"
#include "cb_panel_program_controller.h"
#include "cb_panel_dashboard_controller.h"

MainWindow::MainWindow() :
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    init();
    setCurrentFile("");
}

MainWindow::MainWindow(const QString &fileName):
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    init();
    loadFile(fileName);
}

MainWindow::~MainWindow()
{
    delete _panelPortViewController;
    delete _panelProgramController;
    delete _panelDashboardController;
    delete ui;
}

void MainWindow::closeEvent(QCloseEvent *event)
{
    if (maybeSave()) {
        writeSettings();
        event->accept();
    } else {
        event->ignore();
    }
}

void MainWindow::newFile()
{
    MainWindow *other = new MainWindow;
    other->move(x() + 40, y() + 40);
    other->show();
}

void MainWindow::open()
{
    QString fileName = QFileDialog::getOpenFileName(
                this,
                tr("Open CraftBlocks Sketch"),
                QStandardPaths::writableLocation(QStandardPaths::DocumentsLocation),
                tr("CraftBlocks Sketches (*.cbs)"));
    if (!fileName.isEmpty()) {
        MainWindow *existing = findMainWindow(fileName);
        if (existing) {
            existing->show();
            existing->raise();
            existing->activateWindow();
            return;
        }

        if (_isUntitled && !isWindowModified()) {
            loadFile(fileName);
        } else {
            MainWindow *other = new MainWindow(fileName);
            if (other->_isUntitled) {
                delete other;
                return;
            }
            other->move(x() + 40, y() + 40);
            other->show();
        }
    }
}

bool MainWindow::save()
{
    if (_isUntitled) {
        return saveAs();
    } else {
        return saveFile(_strCurrentFile);
    }
}

bool MainWindow::saveAs()
{
    QString fileName = QFileDialog::getSaveFileName(
                this,
                tr("Save As"),
                _strCurrentFile);
    if (fileName.isEmpty())
        return false;

    return saveFile(fileName);
}

void MainWindow::copy()
{
    QWidget* focused = QApplication::focusWidget();
    if( focused != 0 ) {
        QApplication::postEvent( focused,
                                 new QKeyEvent( QEvent::KeyPress,
                                                Qt::Key_C,
                                                Qt::ControlModifier ));
        QApplication::postEvent( focused,
                                 new QKeyEvent( QEvent::KeyRelease,
                                                Qt::Key_C,
                                                Qt::ControlModifier ));
    }
}

void MainWindow::cut()
{
    QWidget* focused = QApplication::focusWidget();
    if( focused != 0 ) {
        QApplication::postEvent( focused,
                                 new QKeyEvent( QEvent::KeyPress,
                                                Qt::Key_X,
                                                Qt::ControlModifier ));
        QApplication::postEvent( focused,
                                 new QKeyEvent( QEvent::KeyRelease,
                                                Qt::Key_X,
                                                Qt::ControlModifier ));
    }
}

void MainWindow::paste()
{
    QWidget* focused = QApplication::focusWidget();
    if( focused != 0 ) {
        QApplication::postEvent( focused,
                                 new QKeyEvent( QEvent::KeyPress,
                                                Qt::Key_V,
                                                Qt::ControlModifier ));
        QApplication::postEvent( focused,
                                 new QKeyEvent( QEvent::KeyRelease,
                                                Qt::Key_V,
                                                Qt::ControlModifier ));
    }
}

void MainWindow::about()
{
   QMessageBox::about(this, tr("About CraftBlocks"),
            tr("The <b>CraftBlocks</b> is a product made by EFB."));
}

void MainWindow::documentWasModified()
{
    setWindowModified(true);
}

void MainWindow::panelButtonClicked(QAbstractButton *button)
{
    if (button == ui->buttonPortView)
        ui->stackedWidget->setCurrentWidget(ui->panelPortView);
    else if (button == ui->buttonProgram)
        ui->stackedWidget->setCurrentWidget(ui->panelProgram);
    else if (button == ui->buttonDashboard)
        ui->stackedWidget->setCurrentWidget(ui->panelDashboard);
}

void MainWindow::init()
{
    // init variables
    _isUntitled = true;
    _strCurrentFile = "";
    _strCurrentData = "";

    // init style sheet
    QFile file(":/res/qss/main.qss");
    file.open(QFile::ReadOnly);
    QString styleSheet = QString::fromUtf8(file.readAll());
    qApp->setStyleSheet(styleSheet);

    // init window
    this->setGeometry(50,100,1024,725);
    this->setMinimumSize(1024,725);
    //this->setAttribute(Qt::WA_DeleteOnClose);

    // init panels
    QButtonGroup *group = new QButtonGroup(this);
    connect(group, SIGNAL(buttonClicked(QAbstractButton*)), this, SLOT(panelButtonClicked(QAbstractButton*)));
    group->addButton(ui->buttonPortView);
    group->addButton(ui->buttonProgram);
    group->addButton(ui->buttonDashboard);
    ui->buttonPortView->setCheckable(true);
    ui->buttonProgram->setCheckable(true);
    ui->buttonDashboard->setCheckable(true);
    ui->buttonProgram->setChecked(true);

    _panelPortViewController = new CBPanelPortViewController(this);
    _panelProgramController = new CBPanelProgramController(this);
    _panelDashboardController = new CBPanelDashboardController(this);

    connect(_panelProgramController, SIGNAL(contentsChanged()), this, SLOT(documentWasModified()));

    createActions();
    createMenus();

    readSettings();

}

void MainWindow::createActions()
{
    newAct = new QAction(tr("&New"), this);
    newAct->setShortcuts(QKeySequence::New);
    connect(newAct, SIGNAL(triggered()), this, SLOT(newFile()));

    openAct = new QAction(tr("&Open..."), this);
    openAct->setShortcuts(QKeySequence::Open);
    connect(openAct, SIGNAL(triggered()), this, SLOT(open()));

    saveAct = new QAction(tr("&Save"), this);
    saveAct->setShortcuts(QKeySequence::Save);
    connect(saveAct, SIGNAL(triggered()), this, SLOT(save()));

    saveAsAct = new QAction(tr("Save &As..."), this);
    saveAsAct->setShortcuts(QKeySequence::SaveAs);
    connect(saveAsAct, SIGNAL(triggered()), this, SLOT(saveAs()));

    closeAct = new QAction(tr("&Close"), this);
    closeAct->setShortcut(tr("Ctrl+W"));
    connect(closeAct, SIGNAL(triggered()), this, SLOT(close()));

    exitAct = new QAction(tr("E&xit"), this);
    exitAct->setShortcuts(QKeySequence::Quit);
    connect(exitAct, SIGNAL(triggered()), qApp, SLOT(closeAllWindows()));

    cutAct = new QAction(tr("Cu&t"), this);
    cutAct->setShortcuts(QKeySequence::Cut);
    connect(cutAct, SIGNAL(triggered()), this, SLOT(cut()));

    copyAct = new QAction(tr("&Copy"), this);
    copyAct->setShortcuts(QKeySequence::Copy);
    connect(copyAct, SIGNAL(triggered()), this, SLOT(copy()));

    pasteAct = new QAction(tr("&Paste"), this);
    pasteAct->setShortcuts(QKeySequence::Paste);
    connect(pasteAct, SIGNAL(triggered()), this, SLOT(paste()));

    aboutAct = new QAction(tr("&About"), this);
    connect(aboutAct, SIGNAL(triggered()), this, SLOT(about()));

    ///cutAct->setEnabled(false);
    ///copyAct->setEnabled(false);
    ///connect(textEdit, SIGNAL(copyAvailable(bool)), cutAct, SLOT(setEnabled(bool)));
    ///connect(textEdit, SIGNAL(copyAvailable(bool)), copyAct, SLOT(setEnabled(bool)));
}

void MainWindow::createMenus()
{
    fileMenu = menuBar()->addMenu(tr("&File"));

    fileMenu->addAction(newAct);
    fileMenu->addAction(openAct);
    fileMenu->addAction(saveAct);
    fileMenu->addAction(saveAsAct);
    fileMenu->addSeparator();
    fileMenu->addAction(closeAct);
    fileMenu->addAction(exitAct);

    editMenu = menuBar()->addMenu(tr("&Edit"));
    editMenu->addAction(cutAct);
    editMenu->addAction(copyAct);
    editMenu->addAction(pasteAct);

    menuBar()->addSeparator();

    helpMenu = menuBar()->addMenu(tr("&Help"));
    helpMenu->addAction(aboutAct);
}

void MainWindow::readSettings()
{
    QSettings settings;
    QPoint pos = settings.value("pos", QPoint(200, 200)).toPoint();
    QSize size = settings.value("size", QSize(400, 400)).toSize();
    move(pos);
    resize(size);
}

void MainWindow::writeSettings()
{
    QSettings settings;
    settings.setValue("pos", pos());
    settings.setValue("size", size());
}

bool MainWindow::maybeSave()
{
    if (isWindowModified()) {
        QMessageBox::StandardButton ret;
        ret = QMessageBox::warning(this, tr("CraftBlocks"),
                     tr("This CraftBlocks sketch has been modified.\nDo you want to save your changes?"),
                     QMessageBox::Save | QMessageBox::Discard | QMessageBox::Cancel);
        if (ret == QMessageBox::Save)
            return save();
        else if (ret == QMessageBox::Cancel)
            return false;
    }
    return true;
}

void MainWindow::loadFile(const QString &fileName)
{

    QFile file(fileName);
    if (!file.open(QFile::ReadOnly | QFile::Text)) {
        QMessageBox::warning(this, tr("CraftBlocks"),
                             tr("Cannot read file %1:\n%2.")
                             .arg(fileName)
                             .arg(file.errorString()));
        return;
    }

    QTextStream in(&file);
    QApplication::setOverrideCursor(Qt::WaitCursor);
    _strCurrentData = in.readAll();
    _panelProgramController->loadBlocks(_strCurrentData);
    QApplication::restoreOverrideCursor();

    setCurrentFile(fileName);
}

bool MainWindow::saveFile(const QString &fileName)
{
    QFile file(fileName);
    if (!file.open(QFile::WriteOnly | QFile::Text)) {
        QMessageBox::warning(this, tr("CraftBlocks"),
                             tr("Cannot write file %1:\n%2.")
                             .arg(fileName)
                             .arg(file.errorString()));
        return false;
    }

    QTextStream out(&file);
    QApplication::setOverrideCursor(Qt::WaitCursor);
    _strCurrentData = _panelProgramController->exportBlocks();
    out << _strCurrentData;
    QApplication::restoreOverrideCursor();

    setCurrentFile(fileName);
    return true;
}

void MainWindow::setCurrentFile(const QString &fileName)
{
    QDateTime now = QDateTime::currentDateTime();

    _isUntitled = fileName.isEmpty();
    if (_isUntitled) {
        _strCurrentFile = QStandardPaths::writableLocation(QStandardPaths::DocumentsLocation) +
                "/" + tr("CraftBlocks Sketch %1.cbs").arg(now.toString("yyMMdd_hhmmss"));
    } else {
        _strCurrentFile = QFileInfo(fileName).canonicalFilePath();
    }

    setWindowModified(false);
    setWindowFilePath(_strCurrentFile);
}

QString MainWindow::strippedName(const QString &fullFileName)
{
    return QFileInfo(fullFileName).fileName();
}

MainWindow *MainWindow::findMainWindow(const QString &fileName)
{
    QString canonicalFilePath = QFileInfo(fileName).canonicalFilePath();

    foreach (QWidget *widget, qApp->topLevelWidgets()) {
        MainWindow *mainWin = qobject_cast<MainWindow *>(widget);
        if (mainWin && mainWin->_strCurrentFile == canonicalFilePath)
            return mainWin;
    }
    return 0;
}
