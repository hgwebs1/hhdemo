// notebookData.js
const notebookData = [
    {
        id: 'topic-html-basics',
        name: 'HTML Basics',
        isActive: true, 
        sections: [
            {
                title: '1. Basic Structure (Headings & Paragraphs)',
                theory: 'Website par bada text likhne ke liye **Heading** aur normal text ke liye **Paragraph** tag lagate hain.\n\nIske alawa, HTML seekhna bahut aasan hai. Aap isme vibhinn prakar ke tags ka upyog karke ek behtareen webpage bana sakte hain. Text ko format karna, images lagana, aur forms banana isme bahut hi saral prakriya hai. HTML web development ki pehli seedhi hai jise har programmer ko seekhna padta hai. Iske bina internet par websites ki kalpana karna mushkil hai aur HTML har website ka aadhar hota hai.',
                code: '<h1>Main Heading</h1>\n<h2>Choti Heading</h2>\n<p>Yeh ek paragraph hai. Isme hum jaankari likhte hain joki thodi lambi bhi ho sakti hai bina enter dabaye dekhte hain wrap hoti hai ya nahi.</p>'
            },
            {
                title: '2. Text Formatting (Bold, Italic)',
                theory: 'Text ko alag tarike se highlight ya design karne ke tags. Example: **Bold**, *Italic*, and `Underlined`.',
                code: '<p><b>Bold Text</b> - Mota text</p>\n<p><i>Italic Text</i> - Tircha text</p>\n<p><u>Underlined Text</u> - Line wala</p>'
            },
            {
                title: '3. Links & Images (Photo aur Link)',
                theory: 'Clickable link banane ke liye aur page par photo dikhane ke liye hum `<a>` tag aur `<img>` tag ka upyog karte hain.',
                code: '\n<a href="#" onclick="event.preventDefault(); alert(\'Link clicked!\');">Click Here</a>\n<br><br>\n\n<img src="https://picsum.photos/200/100" alt="Random Photo">'
            },
            {
                title: '4. Forms (Input Box & Buttons)',
                theory: 'User se details lene ke liye form ka use kiya jata hai. Form ke andar input boxes aur submit button hote hain.',
                code: '<form onsubmit="event.preventDefault(); alert(\'Form Submitted!\');">\n  <div class="form-group">\n    <label>Naam:</label>\n    <input type="text" placeholder="Naam likhe">\n  </div>\n  <button type="submit" class="btn">Bhejein</button>\n</form>'
            }
        ]
    },
    {
        id: 'topic-metadata',
        name: 'Metadata',
        isActive: false,
        sections: [
            {
                title: 'Metadata Introduction',
                theory: 'Head tag ke andar metadata rakha jata hai. Jisme webpage ki jankari, jaise `<title>` aur character set define hota hai.',
                code: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>Mera Webpage</title>\n</head>\n<body>\n</body>\n</html>'
            }
        ]
    },
    {
        id: 'topic-all-html-names',
        name: 'All HTML Names',
        isActive: false,
        sections: [
            {
                title: 'HTML Tags List',
                theory: 'HTML me bahut saare elements hote hain jinhe Tags kaha jata hai. Har tag ka apna ek unique function hota hai.',
                code: '<ul>\n  <li>div</li>\n  <li>span</li>\n  <li>header</li>\n  <li>footer</li>\n</ul>'
            }
        ]
    },
    {
        id: 'topic-input-type',
        name: 'Input Type',
        isActive: false,
        sections: [
            {
                title: 'Various Input Types',
                theory: 'Form input me alag alag prakar ka data lene ke liye `type` attribute use hota hai. Jese ki text, password, email, number etc.',
                code: '<input type="text" placeholder="Username">\n<input type="password" placeholder="Password">\n<input type="email" placeholder="Email">'
            }
        ]
    },
    {
        id: 'topic-html-js',
        name: 'HTML Attributes in JS',
        isActive: false,
        sections: [
            {
                title: 'JS Event Attributes',
                theory: 'HTML tags par directly javascript run karne ke liye events ka use kiya jata hai jaise `onclick`, `onmouseover`, `onchange` wagaira.',
                code: '<button onclick="alert(\'Hello World\')">Click Me!</button>'
            }
        ]
    }
];
