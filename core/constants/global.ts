interface TermsListType {
  id: number;
  list: string;
}

export const termsList: TermsListType[] = [
  {
    id: 1,
    list: `
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،`,
  },
  {
    id: 2,
    list: `و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، `,
  },
  {
    id: 3,
    list: `شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، `,
  },
  {
    id: 4,
    list: `در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و `,
  },
  {
    id: 5,
    list: `جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
  },
];

interface NavbarItems {
  id: number;
  title: string;
  icon: string;
}

export const navItems: NavbarItems[] = [
  { id: 1, title: "نمایش لیستی", icon: "listview" },
  { id: 2, title: "نمایش ستونی", icon: "columnViem" },
  { id: 3, title: "تقویم", icon: "calendarNav" },
];

interface ProjectsType {
  id: number;
  title: string;
}
interface WorkSpaceType {
  id: number;
  title: string;
  color: string;
  projects?: ProjectsType[];
}

export const workSpaceItems: WorkSpaceType[] = [
  {
    id: 1,
    title: "درس مدیریت پروژه",
    color: "#40C057",
    projects: [{ id: 1, title: "پروژه اول" }],
  },
  {
    id: 2,
    title: "کارهای شخصی",
    color: "#FAB005",
    projects: [
      { id: 1, title: "پروژه اول" },
      { id: 2, title: "پروژه دوم" },
    ],
  },
  {
    id: 3,
    title: "درس کامپایلر",
    color: "#FA5252",
  },
  {
    id: 4,
    title: "درس طراحی الگوریتم",
    color: "#228BE6",
    projects: [
      { id: 1, title: "پروژه اول" },
      { id: 2, title: "پروژه دوم" },
    ],
  },
];
