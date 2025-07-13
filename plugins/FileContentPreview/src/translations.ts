export const Messages = {
    PREVIEW: {
        "en-US": "Preview",
        "en-GB": "Preview",
        "zh-CN": "预览",
        "zh-TW": "預覽",
        cs: "Náhled",
        da: "Læs fil",
        nl: "Voorbeeld",
        fr: "Aperçu",
        de: "Vorschau",
        el: "διαβάσετε",
        "es-ES": "Leer",
        uk: "читати",
    },
    FILE_SAVED: {
        "en-US": "File saved",
        "en-GB": "File saved",
        "es-ES": "Archivo guardado",
        cs: "Soubor uložen",
        uk: "Файл збережено",
    },
    FILE_SAVE_ERROR: {
        "en-US": "Error saving file",
        "en-GB": "Error saving file",
        "es-ES": "Error guardando archivo",
        cs: "Chyba při úkládání souboru",
        uk: "Помилка збереження файлу",
    },
    TOGGLE_WORD_WRAP: {
        "en-US": "Toggle Word Wrap",
        "en-GB": "Toggle Word Wrap",
        "es-ES": "Salto de línea",
        cs: "Přepnout obtékání slov",
        uk: "Перемикач автопереносу слов",
    },
    JUMP: {
        "en-US": "Jump"
    },
    JUMP_BOTTOM: {
        "en-US": "Jump to the bottom",
        "en-GB": "Jump to the bottom",
        "es-ES": "Saltar al final",
        cs: "Skočit na konec",
        uk: "Прокрутіть до низу",
    },
    JUMP_TOP: {
        "en-US": "Jump to the top",
        "en-GB": "Jump to the top",
        "es-ES": "Saltar al principio",
        cs: "Skočit na začátek",
        uk: "Прокрутіть до верху",
    },
    MONOSPACE: {
        "en-US": "Toggle Monospace Font",
        "en-GB": "Toggle Monospace Font",
        "es-ES": "Alternar fuente monoespaciada",
        cs: "Přepnout pevné písmo",
        uk: "Переключити моноширинний шрифт",
    },
};

export default function getMessages(language: string) {
    return new Proxy(Messages, {
        get(target, prop) {
            return target[prop][language] ?? target[prop]["en-US"] ?? Object.values(target[prop])[0];
        }
    });
}