// ここにメニュー階層のデータを記載する
import HandBook from "@/views/HBD-0000";
import NoticeList from "@/views/NTC-0000";
import NoticeEdit from "@/views/NTC-0200";
import QuestionList from "@/views/QRE-0000";
import QuestionEdit from "@/views/QRE-0200";
import FaqList from "@/views/FAQ-0000";
import FaqEdit from "@/views/FAQ-0200";
import OfficeList from "@/views/OFI-0000";
import OfficeEdit from "@/views/OFI-0200";
import EmbassyList from "@/views/EMI-0000";
import EmbassyEdit from "@/views/EMI-0200";

export default [
  {
    kind: "menu",
    path: "/handbook",
    name: "手帳データ",
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
    path: "/questionnaire",
    name: "アンケート",
    icon: "mdi-comment-question-outline",
    view: QuestionList,
  },
  {
    kind: "route",
    path: "/questionnaire/:id",
    name: "アンケート編集",
    icon: "",
    view: QuestionEdit,
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
    path: "/embassy",
    name: "大使館",
    icon: "mdi-office-building-outline",
    view: EmbassyList,
  },
  {
    kind: "route",
    path: "/embassy/:id",
    name: "大使館編集",
    icon: "",
    view: EmbassyEdit,
  },
];
