#-------------------------------------------------
#
# Project created by QtCreator 2015-05-26T02:22:03
#
#-------------------------------------------------

QT       += core gui widgets webkitwidgets

TARGET = CraftBlocks
TEMPLATE = app

SOURCES += main.cpp\
    main_window.cpp \
    panel_select_button.cpp \
    cb_panel_program_controller.cpp \
    cb_panel_portview_controller.cpp \
    cb_panel_dashboard_controller.cpp

HEADERS  += main_window.h \
    panel_select_button.h \
    cb_panel_program_controller.h \
    cb_panel_portview_controller.h \
    cb_panel_dashboard_controller.h

FORMS    += main_window.ui

RESOURCES += \
    res.qrc
