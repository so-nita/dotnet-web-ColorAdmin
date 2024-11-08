/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'he' ]: { dictionary, getPluralForm } } = {"he":{"dictionary":{"Cancel":"ביטול","Clear":"לנקות","Remove color":"מחיקת צבע","Restore default":"שחזור ברירת מחדל","Save":"שמירה","Show more items":"הצג פריטים נוספים","%0 of %1":"%0 מתוך %1","Cannot upload file:":"לא ניתן להעלות את הקובץ הבא:","Rich Text Editor. Editing area: %0":"עורך פורמט טקסט עשיר. אזור עריכה: %0","Insert with file manager":"הוספה עם מנהל הקבצים","Replace with file manager":"החלפה עם מנהל הקבצים","Insert image with file manager":"הוספת תמונה עם מנהל הקבצים","Replace image with file manager":"החלפת תמונה עם מנהל הקבצים","File":"קובץ","With file manager":"באמצעות מנהל קבצים","Toggle caption off":"כבה את הכיתוב","Toggle caption on":"הפעל את הכיתוב","Content editing keystrokes":"מקשי עריכת תוכן","These keyboard shortcuts allow for quick access to content editing features.":"קיצורי מקשים אלה מאפשרים גישה מהירה לתכונות עריכת תוכן.","User interface and content navigation keystrokes":"ממשק משתמש ומקשים לניווט בתוכן","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"השתמשו במקשים הבאים לניווט יעיל יותר בממשק המשתמש של CKEditor 5.","Close contextual balloons, dropdowns, and dialogs":"סגירת בלוני הקשר, תפריטים נפתחים ותיבות דו-שיח","Open the accessibility help dialog":"פתיחת תיבת הדו-שיח של עזרה בנושא נגישות","Move focus between form fields (inputs, buttons, etc.)":"העברת המיקוד בין שדות בטופס (שדות קלט, לחצנים וכו')","Move focus to the menu bar, navigate between menu bars":"העברת המיקוד לשורת התפריטים, ניווט בין שורות התפריטים","Move focus to the toolbar, navigate between toolbars":"העברת המיקוד לסרגל הכלים, ניווט בין סרגלי כלים","Navigate through the toolbar or menu bar":"ניווט בסרגל הכלים או בשורת התפריטים","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"הפעלת הלחצן שבמיקוד כעת. הפעלת לחצנים המקיימים אינטראקציה עם תוכן העורך מחזירה את המיקוד לתוכן.","Accept":"קבל"},getPluralForm(n){return (n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: 2;}}};
e[ 'he' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'he' ].dictionary = Object.assign( e[ 'he' ].dictionary, dictionary );
e[ 'he' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );