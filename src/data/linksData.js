const links = [
  // حكومية
  {
    slug: 'govisit',
    label: 'حجز دور للهويه او جواز سفر',
    url: 'https://govisit.gov.il/ar/app/auth/login',
    group: 'gov',
    keywords: 'وزارة الداخلية جواز سفر هوية govisit'
  },
  {
    slug: 'btl-625',
    label: '‏املأ التامين الوطني لي هوية جديدة',
    url: 'https://www.btl.gov.il/%D7%98%D7%A4%D7%A1%D7%99%D7%9D%20%D7%95%D7%90%D7%99%D7%A9%D7%95%D7%A8%D7%99%D7%9D/forms/insurance_forms/Pages/625%20-%20%D7%A9%D7%90%D7%9C%D7%95%D7%9F%20%D7%9C%D7%A7%D7%91%D7%99%D7%A2%D7%AA%20%D7%AA%D7%95%D7%A9%D7%91%D7%95%D7%AA%20-%20%D7%91%D7%A2%D7%9C%D7%99%20%D7%A9%D7%A8%D7%94%20%D7%9C%D7%AA%D7%95%D7%A9%D7%91%20%D7%90%D7%A8%D7%A2%D7%99.aspx',
    group: 'gov',
    keywords: 'تأمين وطني رقم هوية btl'
  },
  {
    slug: 'license-new',
    label: 'الحصول على رخصة قيادة / توفس يروك',
    url: 'https://www.gov.il/ar/service/apply_for_new_driver_drivers_license',
    group: 'gov',
    keywords: 'رخصة قيادة توفس يروك משרד התחבורה'
  },
  {
    slug: 'theory',
    label: '‏حجز دور للامتحان / حجز دور للتؤوريا',
    url: 'https://www.theorytest.org.il/',
    group: 'gov',
    keywords: 'امتحان سياقة تؤوريا نظرية'
  },
  {
    slug: 'license-renew',
    label: 'تجديد رخصة القيادة او استخراج الرخصة بعد نجاح',
    url: 'https://ecom.gov.il/voucherspa/input/209?language=ar',
    group: 'gov',
    keywords: 'تجديد رخصة دفع رسوم'
  },

  // جديد
  {
    slug: 'asylum-application',
    label: 'طلب اللجوء',
    url: 'https://www.gov.il/ar/service/apply_for_asylum_in_israel',
    group: 'gov',
    keywords: 'طلب لجوء وزارة الداخلية حماية لاجئين'
  },
  {
    slug: 'egged-tickets',
    label: 'طلب تذاكر (Egged)',
    url: 'https://prodapps.egged.co.il/reserved-seats-app/?language=ar',
    group: 'gov',
    keywords: 'ايجد Egged حافلات تذاكر حجز مقاعد'
  },

  // طرق ودفع
  {
    slug: 'kvish6-north',
    label: 'فتح اشتراك طريق 6 شمال',
    url: 'https://6cn.co.il/register',
    group: 'gov',
    keywords: 'طريق 6 شمال اشتراك 6cn'
  },
  {
    slug: 'kvish6-south',
    label: 'فتح اشتراك طريق 6 جنوب',
    url: 'https://service.kvish6.co.il/#/website/customer-area/registration?x=1&Button=Strip',
    group: 'gov',
    keywords: 'طريق 6 جنوب اشتراك دفع'
  },

  // تأشيرات
  {
    slug: 'visa-ethiopia',
    label: 'التقدم طلب للحصول على تأشيرة إثيوبية',
    url: 'https://www.evisa.gov.et/',
    group: 'visas',
    keywords: 'تأشيرة اثيوبيا evisa ethiopia'
  },
  {
    slug: 'visa-uganda',
    label: 'التقدم طلب للحصول على تأشيرة أوغندية',
    url: 'https://visas.immigration.go.ug/',
    group: 'visas',
    keywords: 'تأشيرة اوغندا uganda visa'
  },
  {
    slug: 'visa-rwanda',
    label: 'التقدم طلب للحصول على تأشيرة رواندا',
    url: 'https://www.migration.gov.rw/',
    group: 'visas',
    keywords: 'تأشيرة رواندا rwanda'
  }
];

export default links;


// const links = [
//   // حكومية
//   { slug: 'govisit', label: 'حجز دور للهويه او جواز سفر', url: 'https://govisit.gov.il/ar/app/auth/login', group: 'gov', keywords: 'وزارة الداخلية جواز سفر هوية govisit' },
//   { slug: 'btl-625', label: '‏املأ التامين الوطني لي هوية جديدة', url: 'https://www.btl.gov.il/%D7%98%D7%A4%D7%A1%D7%99%D7%9D%20%D7%95%D7%90%D7%99%D7%A9%D7%95%D7%A8%D7%99%D7%9D/forms/insurance_forms/Pages/625%20-%20%D7%A9%D7%90%D7%9C%D7%95%D7%9F%20%D7%9C%D7%A7%D7%91%D7%99%D7%A2%D7%AA%20%D7%AA%D7%95%D7%A9%D7%91%D7%95%D7%AA%20-%20%D7%91%D7%A2%D7%9C%D7%99%20%D7%90%D7%A9%D7%A8%D7%94%20%D7%9C%D7%AA%D7%95%D7%A9%D7%91%20%D7%90%D7%A8%D7%A2%D7%99.aspx', group: 'gov', keywords: 'تأمين وطني رقم هوية btl' },
//   { slug: 'license-new', label: 'الحصول على رخصة قيادة/ توفس يروك', url: 'https://www.gov.il/ar/service/apply_for_new_driver_drivers_license', group: 'gov', keywords: 'رخصة قيادة توفس يروك משרד התחבורה' },
//   { slug: 'theory', label: '‏حجز دور للامتحان / حجز دور للتؤوريا', url: 'https://www.theorytest.org.il/', group: 'gov', keywords: 'امتحان سياقة تؤوريا نظرية' },
//   { slug: 'license-renew', label: 'تجديد رخصة القيادة او استخراج الرخصة بعد نجاح', url: 'https://ecom.gov.il/voucherspa/input/209?language=ar', group: 'gov', keywords: 'تجديد رخصة دفع رسوم' },

//   // ✅ جديد
//   { slug: 'asylum-application', label: 'طلب اللجوء', url: 'https://www.gov.il/ar/service/apply_for_asylum_in_israel', group: 'gov', keywords: 'طلب لجوء وزارة الداخلية حماية لاجئين' },
//   { slug: 'egged-tickets', label: 'طلب تذاكر (Egged)‏', url: 'https://prodapps.egged.co.il/reserved-seats-app/?language=ar', group: 'gov', keywords: 'ايجد Egged حافلات تذاكر حجز مقاعد' },

//   // تأشيرات
//   { slug: 'visa-ethiopia', label: 'التقدم طلب للحصول على تأشيرة إثيوبية', url: 'https://www.evisa.gov.et/', group: 'visas', keywords: 'تأشيرة اثيوبيا evisa ethiopia' },
//   { slug: 'visa-uganda', label: 'التقدم طلب للحصول على تأشيرة أوغندية', url: 'https://visas.immigration.go.ug/', group: 'visas', keywords: 'تأشيرة اوغندا uganda visa' },
//   { slug: 'visa-rwanda', label: 'التقدم طلب للحصول على تأشيرة رواندا', url: 'https://www.migration.gov.rw/', group: 'visas', keywords: 'تأشيرة رواندا rwanda' },
// ];

// export default links;
