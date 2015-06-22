#ifndef MAIN_WINDOW_H
#define MAIN_WINDOW_H

#include <QMainWindow>

class QAction;
class QMenu;
class QAbstractButton;
class CBPanelPortViewController;
class CBPanelProgramController;
class CBPanelDashboardController;

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    Ui::MainWindow *ui;

    MainWindow();
    MainWindow(const QString &fileName);
    ~MainWindow();


protected:
    void closeEvent(QCloseEvent *event);

private slots:
    void newFile();
    void open();
    bool save();
    bool saveAs();
    void copy();
    void cut();
    void paste();
    void about();
    void documentWasModified();

    void panelButtonClicked(QAbstractButton *button);

private:
    QString _strCurrentFile;
    QString _strCurrentData;
    bool _isUntitled;

    CBPanelPortViewController *_panelPortViewController;
    CBPanelProgramController *_panelProgramController;
    CBPanelDashboardController *_panelDashboardController;

    QMenu *fileMenu;
    QMenu *editMenu;
    QMenu *helpMenu;
    QToolBar *fileToolBar;
    QToolBar *editToolBar;
    QAction *newAct;
    QAction *openAct;
    QAction *saveAct;
    QAction *saveAsAct;
    QAction *closeAct;
    QAction *exitAct;
    QAction *cutAct;
    QAction *copyAct;
    QAction *pasteAct;
    QAction *aboutAct;

    void init();
    void createActions();
    void createMenus();
    void readSettings();
    void writeSettings();
    bool maybeSave();
    void loadFile(const QString &fileName);
    bool saveFile(const QString &fileName);
    void setCurrentFile(const QString &fileName);
    QString strippedName(const QString &fullFileName);
    MainWindow *findMainWindow(const QString &fileName);
};

#endif // MAIN_WINDOW_H
