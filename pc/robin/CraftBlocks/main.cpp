#include "main_window.h"
#include <QApplication>
#include <QTextCodec>

int main(int argc, char *argv[])
{
    QTextCodec *utf8 = QTextCodec::codecForName("utf8");
    QTextCodec::setCodecForLocale(utf8);

    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    return a.exec();
}
