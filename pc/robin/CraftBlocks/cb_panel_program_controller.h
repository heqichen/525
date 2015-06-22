#ifndef CB_PANEL_PROGRAM_CONTROLLER_H
#define CB_PANEL_PROGRAM_CONTROLLER_H

#include <QObject>

class MainWindow;
class QAbstractButton;
class QToolButton;
class QButtonGroup;

namespace Ui {
class MainWindow;
}

class CBPanelProgramController : public QObject
{
    Q_OBJECT
public:
    explicit CBPanelProgramController(QObject *parent = 0);

    void loadDefaultBlocks();
    void loadBlocks(const QString & strBlocksXML);
    QString exportBlocks();

signals:
    void blocklyEditorInitialized();
    void contentsChanged();

public slots:
    void zoomIn();
    void zoomOut();
    void zoomNormal();
    void blocklyEditorAttachScriptableObject();
    void blocklyEditorLoaded(bool ok);
    void blocklyEditorChanged();
    void toolboxTabChanged(int index);
    void toolboxButtonClicked(QAbstractButton *button);

private:
    Ui::MainWindow *ui;
    MainWindow* _window;

    QString _blocklyPath;
    QString _blocklyEditorData;
    bool _blocklyEditorIsReady;

    void initToolbox();
    QToolButton* makeToolboxButton(QButtonGroup *group, const QString & text, const QString & tooltip, const QString & iconfile, bool textHidden = false);

};

#endif // CB_PANEL_PROGRAM_CONTROLLER_H
