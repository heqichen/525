#include <QtWidgets>
#include <QWebFrame>
#include <QDebug>
#include "main_window.h"
#include "ui_main_window.h"
#include "cb_panel_program_controller.h"

#ifdef QT_NO_DEBUG
    #define BLOCKLY_PATH "blockly/efb/525"
#else
    #ifdef Q_OS_OSX
        #define BLOCKLY_PATH "../../../../blockly/efb/525"
	#endif


	#ifdef Q_OS_LINUX
		#ifndef BLOCKLY_PATH
			#define BLOCKLY_PATH "../blockly/efb/525"
		#endif
	#endif

#endif



CBPanelProgramController::CBPanelProgramController(QObject *parent) :
    QObject(parent)
{
    _blocklyPath = QCoreApplication::applicationDirPath() + "/" + BLOCKLY_PATH;
	qDebug() << _blocklyPath;
    _blocklyEditorIsReady = false;
    _blocklyEditorData = "";

    _window = (MainWindow*)parent;
    ui = _window->ui;

    ui->toolbox->setCurrentWidget(ui->pageControl);
    connect(ui->toolbox, SIGNAL(currentChanged(int)), this, SLOT(toolboxTabChanged(int)));

    QString strHTMLFile = _blocklyPath + "/editor.html";
    QUrl url = QUrl::fromLocalFile(strHTMLFile);
    ui->webView->setContextMenuPolicy(Qt::NoContextMenu);
    ui->webView->load(url);
    connect(ui->webView->page()->mainFrame(), SIGNAL(javaScriptWindowObjectCleared()), this, SLOT(blocklyEditorAttachScriptableObject()));
    connect(ui->webView, SIGNAL(loadFinished(bool)), this, SLOT(blocklyEditorLoaded(bool)));

    connect(ui->toolButtonZoomIn,     SIGNAL(clicked()), this, SLOT(zoomIn()));
    connect(ui->toolButtonZoomOut,    SIGNAL(clicked()), this, SLOT(zoomOut()));
    connect(ui->toolButtonZoomNormal, SIGNAL(clicked()), this, SLOT(zoomNormal()));

    initToolbox();
}

void CBPanelProgramController::loadDefaultBlocks()
{
    QString strDefault = "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><block type=\"task_start\" id=\"1\" x=\"470\" y=\"90\"></block></xml>";
    loadBlocks(strDefault);
}

void CBPanelProgramController::loadBlocks(const QString & strBlocksXML)
{
    _blocklyEditorData = strBlocksXML;
    if (_blocklyEditorIsReady) {
        QString data = _blocklyEditorData;
        data = data.replace("\n", "");
        data = data.replace("\r", "");
        data = data.replace("'", "\\x27");
        //qDebug() << strFileData;
        ui->webView->page()->mainFrame()->evaluateJavaScript(QString("Editor.loadBlocks('%1');").arg(data));
    }
}

QString CBPanelProgramController::exportBlocks()
{
    return ui->webView->page()->mainFrame()->evaluateJavaScript(QString("Editor.exportBlocks();")).toString();
}

void CBPanelProgramController::blocklyEditorAttachScriptableObject()
{
    ui->webView->page()->mainFrame()->addToJavaScriptWindowObject("Controller", this);
}

void CBPanelProgramController::blocklyEditorLoaded(bool ok)
{
    if (ok) {
        _blocklyEditorIsReady = true;
        if (_blocklyEditorData.isEmpty()) {
            loadDefaultBlocks();
        } else {
            loadBlocks(_blocklyEditorData);
        }

        emit blocklyEditorInitialized();
    }
}

void CBPanelProgramController::blocklyEditorChanged()
{
    emit contentsChanged();
}

void CBPanelProgramController::zoomIn()
{
    double rate = ui->webView->zoomFactor();
    if (rate<1.6) rate += 0.1;
    ui->webView->setZoomFactor(rate);
}

void CBPanelProgramController::zoomOut()
{
    double rate = ui->webView->zoomFactor();
    if (rate>0.4) rate -= 0.1;
    ui->webView->setZoomFactor(rate);
}

void CBPanelProgramController::zoomNormal()
{
    ui->webView->setZoomFactor(1);
}

void CBPanelProgramController::toolboxTabChanged(int index)
{
    ui->webView->page()->mainFrame()->evaluateJavaScript("Editor.showToolboxBlocks('none');");

    if (ui->toolbox->widget(index) == ui->pageControl) {
        QString strCategory = "Flow Control";
        ui->webView->page()->mainFrame()->evaluateJavaScript(QString("Editor.showToolboxBlocks('%1');").arg(strCategory));
    }
}

void CBPanelProgramController::toolboxButtonClicked(QAbstractButton *button)
{
    if (button) {
        QString strCategory = button->toolTip();
        ui->webView->page()->mainFrame()->evaluateJavaScript(QString("Editor.showToolboxBlocks('%1');").arg(strCategory));
    }
}

void CBPanelProgramController::initToolbox()
{

    QButtonGroup *group = new QButtonGroup(this);
    connect(group, SIGNAL(buttonClicked(QAbstractButton*)), this, SLOT(toolboxButtonClicked(QAbstractButton*)));

    QBoxLayout *layoutOnboard = new QVBoxLayout;
    layoutOnboard->setMargin(10);
    layoutOnboard->setSpacing(8);
    layoutOnboard->addWidget(makeToolboxButton(group, "Onboard - Display",           tr("Display"),  "onboard/icon_display.png"));
    layoutOnboard->addWidget(makeToolboxButton(group, "Onboard - Buttons",           tr("Buttons"),  "onboard/icon_buttons.png"));
    layoutOnboard->addWidget(makeToolboxButton(group, "Onboard - Status Light",      tr("Light"),    "onboard/icon_light.png"));
    layoutOnboard->addWidget(makeToolboxButton(group, "Onboard - Speaker",           tr("Speaker"),  "onboard/icon_speaker.png"));
    layoutOnboard->addWidget(makeToolboxButton(group, "Onboard - Wireless Messager", tr("Messager"), "onboard/icon_messager.png"));
    layoutOnboard->addWidget(makeToolboxButton(group, "Onboard - Timer",             tr("Timer"),    "onboard/icon_timer.png"));
    layoutOnboard->addStretch();
    ui->pageOnboard->setLayout(layoutOnboard);

    QBoxLayout *layoutMobile = new QVBoxLayout;
    layoutMobile->setMargin(10);
    layoutMobile->setSpacing(8);
    layoutMobile->addWidget(makeToolboxButton(group, "Mobile - Attitude Sensor", tr("Attitude"), "onmobile/icon_attitude.png"));
    layoutMobile->addWidget(makeToolboxButton(group, "Mobile - Location Sensor", tr("Location"), "onmobile/icon_location.png"));
    layoutMobile->addWidget(makeToolboxButton(group, "Mobile - QR Code Reader",  tr("QR Code"),  "onmobile/icon_qrcode.png"));
    layoutMobile->addWidget(makeToolboxButton(group, "Mobile - Color Sensor",    tr("Color"),    "onmobile/icon_color.png"));
    layoutMobile->addWidget(makeToolboxButton(group, "Mobile - Sound Sensor",    tr("Sound"),    "onmobile/icon_sound.png"));
    layoutMobile->addWidget(makeToolboxButton(group, "Mobile - Voice Commander", tr("Voice"),    "onmobile/icon_voice.png"));
    layoutMobile->addStretch();
    ui->pageMobile->setLayout(layoutMobile);

    QBoxLayout *layoutDashboard = new QVBoxLayout;
    layoutDashboard->setMargin(10);
    layoutDashboard->setSpacing(8);
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Button",       tr("Button"),  "dashboard/icon_button.png"));
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Switch",       tr("Switch"),  "dashboard/icon_switch.png"));
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Joystick",     tr("Joystick"),"dashboard/icon_joystick.png"));
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Slider",       tr("Slider"),  "dashboard/icon_slider.png"));
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Tuner",        tr("Tuner"),   "dashboard/icon_tuner.png"));
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Progress Bar", tr("Progress"),"dashboard/icon_progress.png"));
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Text Field",   tr("Text"),    "dashboard/icon_text.png"));
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Canvas",       tr("Canvas"),  "dashboard/icon_canvas.png"));
    layoutDashboard->addWidget(makeToolboxButton(group, "Dashboard - Speaker",      tr("Speaker"), "dashboard/icon_speaker.png"));
    layoutDashboard->addStretch();
    ui->pageDashboard->setLayout(layoutDashboard);

    QBoxLayout *layoutSesnors = new QVBoxLayout;
    layoutSesnors->setMargin(10);
    layoutSesnors->setSpacing(8);
    layoutSesnors->addWidget(makeToolboxButton(group, "Sensors - Ultrasonic Ranger",   tr("Ultrasonic"),  "sensors/icon_ultrasonic.png"));
    layoutSesnors->addWidget(makeToolboxButton(group, "Sensors - PIR Motion Detector", tr("PIR Motion"),  "sensors/icon_pir_motion.png"));
    layoutSesnors->addWidget(makeToolboxButton(group, "Sensors - Infrared Emitter",    tr("IR Emitter"),  "sensors/icon_ir_emitter.png"));
    layoutSesnors->addWidget(makeToolboxButton(group, "Sensors - Infrared Receiver",   tr("IR Receiver"), "sensors/icon_ir_receiver.png"));
    layoutSesnors->addWidget(makeToolboxButton(group, "Sensors - Touch Keys",          tr("Touch Keys"),  "sensors/icon_touch_key.png"));
    layoutSesnors->addWidget(makeToolboxButton(group, "Sensors - Light Sensor",        tr("Light"),       "sensors/icon_light.png"));
    layoutSesnors->addWidget(makeToolboxButton(group, "Sensors - Temperature Sensor",  tr("Temperature"), "sensors/icon_temperature.png"));
    layoutSesnors->addWidget(makeToolboxButton(group, "Sensors - Encoder",             tr("Encoder"),     "sensors/icon_encoder.png"));
    layoutSesnors->addStretch();
    ui->pageSensors->setLayout(layoutSesnors);

    QBoxLayout *layoutActions = new QVBoxLayout;
    layoutActions->setMargin(10);
    layoutActions->setSpacing(8);
    layoutActions->addWidget(makeToolboxButton(group, "Actions - RGB Lights",   tr("RGB Lights"),  "actions/icon_led_rgb.png"));
    layoutActions->addWidget(makeToolboxButton(group, "Actions - RGB Matrix",   tr("LED Matrix"),  "actions/icon_led_matrix.png"));
    layoutActions->addWidget(makeToolboxButton(group, "Actions - DC Motor",     tr("DC Motor"),    "actions/icon_motor_dc.png"));
    layoutActions->addWidget(makeToolboxButton(group, "Actions - NXT Motor",    tr("NXT Motor"),   "actions/icon_motor_nxt.png"));
    layoutActions->addWidget(makeToolboxButton(group, "Actions - Stepper",      tr("Stepper"),     "actions/icon_motor_stepper.png"));
    layoutActions->addWidget(makeToolboxButton(group, "Actions - Servo",        tr("Servo"),       "actions/icon_motor_servo.png"));

    layoutActions->addStretch();
    ui->pageActions->setLayout(layoutActions);

    QBoxLayout *layoutGeneral = new QVBoxLayout;
    layoutGeneral->setMargin(10);
    layoutGeneral->setSpacing(8);
    layoutGeneral->addWidget(makeToolboxButton(group, "General - Digital IN",           tr("Digital In"),  "sensors/icon_digital_in.png"));
    layoutGeneral->addWidget(makeToolboxButton(group, "General - Digital OUT",          tr("Digital Out"), "sensors/icon_digital_out.png"));
    layoutGeneral->addWidget(makeToolboxButton(group, "General - Analog IN",            tr("Analog In"),   "sensors/icon_analog_in.png"));
    layoutGeneral->addWidget(makeToolboxButton(group, "General - Analog OUT",           tr("Analog Out"),  "sensors/icon_analog_out.png"));
    layoutGeneral->addWidget(makeToolboxButton(group, "General - Serial Communication", tr("Serial"),      "sensors/icon_serial.png"));
    layoutGeneral->addStretch();
    ui->pageGeneral->setLayout(layoutGeneral);

    QBoxLayout *layoutControl = new QVBoxLayout;
    layoutControl->setMargin(10);
    layoutControl->setSpacing(8);
    layoutControl->addWidget(makeToolboxButton(group, "Flow Control", tr("Flows"),     "toolbox/control_flow.png"));
    layoutControl->addWidget(makeToolboxButton(group, "Math",         tr("Math"),      "toolbox/control_math.png"));
    layoutControl->addWidget(makeToolboxButton(group, "Logic",        tr("Logic"),     "toolbox/control_logic.png"));
    layoutControl->addWidget(makeToolboxButton(group, "Text",         tr("Text"),      "toolbox/control_text.png"));
    layoutControl->addWidget(makeToolboxButton(group, "Lists",        tr("Lists"),     "toolbox/control_array.png"));
    layoutControl->addWidget(makeToolboxButton(group, "Variables",    tr("Variables"), "toolbox/control_variables.png"));
    layoutControl->addWidget(makeToolboxButton(group, "Functions",    tr("Functions"), "toolbox/control_functions.png"));
    layoutControl->addStretch();
    ui->pageControl->setLayout(layoutControl);

}

QToolButton* CBPanelProgramController::makeToolboxButton(QButtonGroup *group, const QString & name, const QString & text, const QString & iconfile, bool textHidden)
{
    QToolButton *button = new QToolButton(_window);
    button->setText(text);
    button->setToolTip(name);
    button->setCheckable(true);

    button->setIcon(QIcon(_blocklyPath + "/icons/" + iconfile));

    if (textHidden) {
        button->setIconSize(QSize(60, 60));
        button->setToolButtonStyle(Qt::ToolButtonIconOnly);
    } else {
        button->setIconSize(QSize(60, 40));
        button->setToolButtonStyle(Qt::ToolButtonTextUnderIcon);
    }

    group->addButton(button);
    return button;
}
