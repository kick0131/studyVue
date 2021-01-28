// ここにメニュー階層のデータを記載する
import HandBook from "@/views/HBD-0000";
import NoticeList from "@/views/NTC-0000";
import NoticeEdit from "@/views/NTC-0200";
import FaqList from "@/views/FAQ-0000";
import FaqEdit from "@/views/FAQ-0200";
import OfficeList from "@/views/OFI-0000";
import OfficeEdit from "@/views/OFI-0200";
import ImportExport from "@/views/ImportExport";

export default [
  {
    kind: "menu",
    path: "/handbook",
    name: "PDFデータ",
    icon: "mdi-notebook-outline",
    view: HandBook,
  },
  {
    kind: "menu",
    path: "/notice",
    name: "お知らせ",
    icon: "mdi-folder-information-outline",
    view: NoticeList,
  },
  {
    kind: "route",
    path: "/notice/:id",
    name: "お知らせ編集",
    icon: "",
    view: NoticeEdit,
  },
  {
    kind: "menu",
    path: "/faq",
    name: "ヘルプ・FAQ",
    icon: "mdi-frequently-asked-questions",
    view: FaqList,
  },
  {
    kind: "route",
    path: "/faq/:id",
    name: "ヘルプ・FAQ編集",
    icon: "",
    view: FaqEdit,
  },
  {
    kind: "menu",
    path: "/office",
    name: "事務所",
    icon: "mdi-office-building",
    view: OfficeList,
  },
  {
    kind: "route",
    path: "/office/:id",
    name: "事務所編集",
    icon: "",
    view: OfficeEdit,
  },
  {
    kind: "menu",
    path: "/inout",
    name: "インポートエクスポート",
    icon: "mdi-cloud-download-outline",
    view: ImportExport,
  },
];
