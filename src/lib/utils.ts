const utils: Util[] = [
    {
        path: "skin-stealer",
        name: "Skin Stealer",
        description: "Steal a player's skin from their IGN.",
        shortDescription: "Steal another player's skin"
    },
    {
        path: "server-jars",
        name: "Server Jars",
        description: "Download existing jar files for<br> popular server software.",
        shortDescription: "Download server software jar"
    },
    {
        path: "start-file-generator",
        name: "Start File Generator",
        description: "Generate server start file with<br> varying settings and flags.",
        shortDescription: "Generate server jar start file"
    },
    {
        path: "note-block-songs",
        name: "Note Block Songs",
        description: "Largest collection of Note Block Songs<br> (.nbs files) to use with <a href='https://www.spigotmc.org/resources/noteblockapi.19287/' target='_blank' class='underline decoration-dotted'>NoteblockAPI</a>.",
        shortDescription: "Largest .nbs file collection"
    },
    {
        path: "inventory-slots",
        name: "Inventory Slots",
        description: "Slot numbers for every inventory type.",
        shortDescription: "Numbers for all inventories"
    },
    {
        path: "color-text-generator",
        name: "Color Text Generator",
        description: "Generate and preview text with color codes.",
        shortDescription: "Create text with color codes"
    },
    {
        path: "unicode-symbols",
        name: "Unicode Symbols",
        description: "The full collection of all allowed<br> in-game unicode characters.",
        shortDescription: "All allowed unicode symbols"
    },
    {
        path: "gradient-generator",
        name: "Gradient Generator",
        description: "Generate a gradient between two<br> colors for in-game text.",
        shortDescription: "Create chat color gradient"
    },
    {
        path: "server-info",
        name: "Server Info",
        description: "Ping an address to get live server data.",
        shortDescription: "Ping server for info"
    },
    {
        path: "armor-color",
        name: "Armor Color Generator",
        description: "Generate Leather armor using any color.",
        shortDescription: "Generate Leather colored armor"
    }
]

type Util = {
    path: string
    name: string
    description: string
    shortDescription: string
}

export const utilList = async () => {
    return utils
}

export const findUtilByPath = async (path: string) => {
    for (const i in utils) {
        const util = utils[i]
        if (util.path == path) return util
    }
    return undefined
}