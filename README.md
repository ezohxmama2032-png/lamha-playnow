# لمحة — نسخة جاهزة للرفع على GitHub

## النشر
1. فك ضغط الملف.
2. افتح مجلد `lamha-github-ready`.
3. ارفع **كل الملفات والمجلدات الموجودة داخله** إلى جذر مستودع GitHub (نفس مستوى `index.html`).
4. وافق على استبدال الملفات القديمة إذا كنت تريد اعتماد النسخة الجديدة.
5. فعّل GitHub Pages من Settings → Pages → Deploy from a branch → main → /(root)، أو اربطه بـ Cloudflare Pages.
6. لو Cloudflare Pages: Framework preset = None، Build command اتركه فارغًا، Output directory = `/` أو `.`.

## الموجود
- موقع عربي RTL بتصميم شبابي داكن وأزرق.
- لعبة تخمين تعمل محليًا بقاعدة JSON.
- تصنيفات متنوعة وشخصيات بداية قليلة قابلة للتوسعة.
- ملف PWA manifest.

## الذكاء الاصطناعي
لا يوجد اتصال AI فعلي في هذه النسخة. الخطة موجودة في `docs/AI_PLAN.md`. عند ربط AI استخدم Backend/Serverless وخزّن المفتاح كـ Secret؛ لا تضعه في JavaScript أو GitHub.

## البيانات
راجع `data/characters.json`. أضف سجلات جديدة بنفس البنية، وتأكد من صحة التلميحات والروابط قبل جعل `verified` = true.
