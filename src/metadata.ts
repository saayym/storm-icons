export type IconName = 'arrow-up' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'chevron-up' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevrons-up' | 'chevrons-down' | 'corner-up-right' | 'external-link' | 'home' | 'move' | 'navigation' | 'arrow-up-right' | 'arrow-down-left' | 'arrow-up-left' | 'arrow-down-right' | 'chevrons-left' | 'chevrons-right' | 'corner-down-left' | 'corner-down-right' | 'compass' | 'search' | 'plus' | 'minus' | 'x' | 'check' | 'edit' | 'trash' | 'copy' | 'clipboard' | 'download' | 'upload' | 'share' | 'refresh-cw' | 'rotate-cw' | 'save' | 'send' | 'log-in' | 'log-out' | 'power' | 'zap' | 'scissors' | 'undo' | 'redo' | 'sort-asc' | 'sort-desc' | 'scan' | 'pin' | 'thumbs-up' | 'menu' | 'grid' | 'list' | 'columns' | 'sidebar' | 'layers' | 'sliders' | 'filter' | 'settings' | 'more-horizontal' | 'more-vertical' | 'eye' | 'eye-off' | 'maximize-2' | 'minimize-2' | 'align-left' | 'align-center' | 'align-right' | 'align-justify' | 'bold' | 'italic' | 'underline' | 'type' | 'layout' | 'panel-left' | 'file' | 'file-text' | 'folder' | 'folder-open' | 'image' | 'code' | 'terminal' | 'archive' | 'database' | 'hard-drive' | 'file-plus' | 'file-minus' | 'folder-plus' | 'file-code' | 'file-image' | 'cloud-upload' | 'mail' | 'message-square' | 'phone' | 'bell' | 'at-sign' | 'inbox' | 'paperclip' | 'link' | 'message-circle' | 'phone-call' | 'phone-off' | 'video' | 'rss' | 'play' | 'pause' | 'stop-circle' | 'skip-forward' | 'skip-back' | 'volume' | 'volume-1' | 'volume-2' | 'volume-x' | 'mic' | 'camera' | 'film' | 'radio' | 'headphones' | 'music' | 'airplay' | 'circle' | 'square' | 'triangle' | 'star' | 'heart' | 'flag' | 'bookmark' | 'hash' | 'help-circle' | 'alert-circle' | 'check-circle' | 'x-circle' | 'plus-circle' | 'minus-circle' | 'thumbs-down' | 'award' | 'sparkle' | 'infinity' | 'user' | 'users' | 'user-plus' | 'user-minus' | 'user-check' | 'user-x' | 'github' | 'twitter' | 'globe' | 'shopping-cart' | 'shopping-bag' | 'credit-card' | 'dollar-sign' | 'tag' | 'percent' | 'receipt' | 'gift' | 'truck' | 'package' | 'wallet' | 'lock' | 'unlock' | 'shield' | 'key' | 'alert-triangle' | 'shield-check' | 'shield-x' | 'fingerprint' | 'clock' | 'calendar' | 'map-pin' | 'sun' | 'moon' | 'cloud' | 'wifi' | 'battery' | 'battery-low' | 'battery-medium' | 'battery-high' | 'battery-full' | 'loader' | 'info' | 'monitor' | 'smartphone' | 'tablet' | 'laptop' | 'printer' | 'cpu' | 'server' | 'bluetooth' | 'cast' | 'bar-chart' | 'pie-chart' | 'trending-up' | 'trending-down' | 'activity' | 'map' | 'thermometer' | 'droplet' | 'feather'

export type IconCategory = 'Arrows & Navigation' | 'Actions' | 'Layout & UI' | 'Files & Folders' | 'Communication' | 'Media' | 'Shapes & Symbols' | 'Users & Social' | 'Commerce' | 'Security' | 'Misc'

export const iconCategories: IconCategory[] = ["Arrows & Navigation","Actions","Layout & UI","Files & Folders","Communication","Media","Shapes & Symbols","Users & Social","Commerce","Security","Misc"]

export const iconMetadata: Record<IconName, { category: IconCategory; tags: string[] }> = {
  "arrow-up": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "up"
    ]
  },
  "arrow-down": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "down"
    ]
  },
  "arrow-left": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "back",
      "previous"
    ]
  },
  "arrow-right": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "forward",
      "next"
    ]
  },
  "chevron-up": {
    "category": "Arrows & Navigation",
    "tags": [
      "caret",
      "collapse"
    ]
  },
  "chevron-down": {
    "category": "Arrows & Navigation",
    "tags": [
      "caret",
      "expand",
      "dropdown"
    ]
  },
  "chevron-left": {
    "category": "Arrows & Navigation",
    "tags": [
      "caret",
      "back",
      "collapse"
    ]
  },
  "chevron-right": {
    "category": "Arrows & Navigation",
    "tags": [
      "caret",
      "next",
      "expand"
    ]
  },
  "chevrons-up": {
    "category": "Arrows & Navigation",
    "tags": [
      "collapse",
      "scroll",
      "double"
    ]
  },
  "chevrons-down": {
    "category": "Arrows & Navigation",
    "tags": [
      "expand",
      "scroll",
      "double"
    ]
  },
  "corner-up-right": {
    "category": "Arrows & Navigation",
    "tags": [
      "turn",
      "forward"
    ]
  },
  "external-link": {
    "category": "Arrows & Navigation",
    "tags": [
      "open",
      "new-tab",
      "outbound"
    ]
  },
  "home": {
    "category": "Arrows & Navigation",
    "tags": [
      "house",
      "dashboard",
      "main"
    ]
  },
  "move": {
    "category": "Arrows & Navigation",
    "tags": [
      "drag",
      "reorder",
      "position"
    ]
  },
  "navigation": {
    "category": "Arrows & Navigation",
    "tags": [
      "location",
      "pointer",
      "cursor"
    ]
  },
  "arrow-up-right": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "diagonal"
    ]
  },
  "arrow-down-left": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "diagonal"
    ]
  },
  "arrow-up-left": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "diagonal"
    ]
  },
  "arrow-down-right": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "diagonal"
    ]
  },
  "chevrons-left": {
    "category": "Arrows & Navigation",
    "tags": [
      "back",
      "scroll",
      "double"
    ]
  },
  "chevrons-right": {
    "category": "Arrows & Navigation",
    "tags": [
      "forward",
      "scroll",
      "double"
    ]
  },
  "corner-down-left": {
    "category": "Arrows & Navigation",
    "tags": [
      "turn",
      "reply"
    ]
  },
  "corner-down-right": {
    "category": "Arrows & Navigation",
    "tags": [
      "turn",
      "forward"
    ]
  },
  "compass": {
    "category": "Arrows & Navigation",
    "tags": [
      "direction",
      "north",
      "explore"
    ]
  },
  "search": {
    "category": "Actions",
    "tags": [
      "find",
      "magnify",
      "lookup"
    ]
  },
  "plus": {
    "category": "Actions",
    "tags": [
      "add",
      "create",
      "new"
    ]
  },
  "minus": {
    "category": "Actions",
    "tags": [
      "remove",
      "subtract",
      "decrease"
    ]
  },
  "x": {
    "category": "Actions",
    "tags": [
      "close",
      "cancel",
      "remove",
      "delete"
    ]
  },
  "check": {
    "category": "Actions",
    "tags": [
      "done",
      "complete",
      "confirm",
      "tick"
    ]
  },
  "edit": {
    "category": "Actions",
    "tags": [
      "pencil",
      "write",
      "modify"
    ]
  },
  "trash": {
    "category": "Actions",
    "tags": [
      "delete",
      "remove",
      "bin"
    ]
  },
  "copy": {
    "category": "Actions",
    "tags": [
      "duplicate",
      "clipboard"
    ]
  },
  "clipboard": {
    "category": "Actions",
    "tags": [
      "paste",
      "copy",
      "board"
    ]
  },
  "download": {
    "category": "Actions",
    "tags": [
      "save",
      "export",
      "get"
    ]
  },
  "upload": {
    "category": "Actions",
    "tags": [
      "import",
      "send",
      "put"
    ]
  },
  "share": {
    "category": "Actions",
    "tags": [
      "social",
      "forward",
      "distribute"
    ]
  },
  "refresh-cw": {
    "category": "Actions",
    "tags": [
      "reload",
      "sync",
      "update"
    ]
  },
  "rotate-cw": {
    "category": "Actions",
    "tags": [
      "clockwise",
      "refresh",
      "redo"
    ]
  },
  "save": {
    "category": "Actions",
    "tags": [
      "floppy",
      "disk",
      "store"
    ]
  },
  "send": {
    "category": "Actions",
    "tags": [
      "submit",
      "paper-plane",
      "deliver"
    ]
  },
  "log-in": {
    "category": "Actions",
    "tags": [
      "sign-in",
      "enter",
      "authenticate"
    ]
  },
  "log-out": {
    "category": "Actions",
    "tags": [
      "sign-out",
      "exit",
      "leave"
    ]
  },
  "power": {
    "category": "Actions",
    "tags": [
      "on",
      "off",
      "shutdown"
    ]
  },
  "zap": {
    "category": "Actions",
    "tags": [
      "lightning",
      "bolt",
      "flash",
      "power"
    ]
  },
  "scissors": {
    "category": "Actions",
    "tags": [
      "cut",
      "trim",
      "snip"
    ]
  },
  "undo": {
    "category": "Actions",
    "tags": [
      "back",
      "revert",
      "history"
    ]
  },
  "redo": {
    "category": "Actions",
    "tags": [
      "forward",
      "repeat",
      "history"
    ]
  },
  "sort-asc": {
    "category": "Actions",
    "tags": [
      "ascending",
      "order",
      "arrange"
    ]
  },
  "sort-desc": {
    "category": "Actions",
    "tags": [
      "descending",
      "order",
      "arrange"
    ]
  },
  "scan": {
    "category": "Actions",
    "tags": [
      "qr",
      "barcode",
      "capture"
    ]
  },
  "pin": {
    "category": "Actions",
    "tags": [
      "tack",
      "attach",
      "sticky"
    ]
  },
  "thumbs-up": {
    "category": "Actions",
    "tags": [
      "like",
      "approve",
      "good"
    ]
  },
  "menu": {
    "category": "Layout & UI",
    "tags": [
      "hamburger",
      "navigation",
      "sidebar"
    ]
  },
  "grid": {
    "category": "Layout & UI",
    "tags": [
      "layout",
      "gallery",
      "tiles"
    ]
  },
  "list": {
    "category": "Layout & UI",
    "tags": [
      "items",
      "rows",
      "lines"
    ]
  },
  "columns": {
    "category": "Layout & UI",
    "tags": [
      "layout",
      "split",
      "divide"
    ]
  },
  "sidebar": {
    "category": "Layout & UI",
    "tags": [
      "panel",
      "navigation",
      "drawer"
    ]
  },
  "layers": {
    "category": "Layout & UI",
    "tags": [
      "stack",
      "overlap",
      "z-index"
    ]
  },
  "sliders": {
    "category": "Layout & UI",
    "tags": [
      "controls",
      "adjust",
      "equalizer"
    ]
  },
  "filter": {
    "category": "Layout & UI",
    "tags": [
      "funnel",
      "sort",
      "refine"
    ]
  },
  "settings": {
    "category": "Layout & UI",
    "tags": [
      "gear",
      "cog",
      "preferences",
      "config"
    ]
  },
  "more-horizontal": {
    "category": "Layout & UI",
    "tags": [
      "ellipsis",
      "dots",
      "menu",
      "options"
    ]
  },
  "more-vertical": {
    "category": "Layout & UI",
    "tags": [
      "ellipsis",
      "dots",
      "menu",
      "options"
    ]
  },
  "eye": {
    "category": "Layout & UI",
    "tags": [
      "view",
      "visible",
      "show",
      "watch"
    ]
  },
  "eye-off": {
    "category": "Layout & UI",
    "tags": [
      "hidden",
      "invisible",
      "hide"
    ]
  },
  "maximize-2": {
    "category": "Layout & UI",
    "tags": [
      "fullscreen",
      "expand"
    ]
  },
  "minimize-2": {
    "category": "Layout & UI",
    "tags": [
      "shrink",
      "collapse"
    ]
  },
  "align-left": {
    "category": "Layout & UI",
    "tags": [
      "text",
      "format",
      "paragraph"
    ]
  },
  "align-center": {
    "category": "Layout & UI",
    "tags": [
      "text",
      "format",
      "paragraph"
    ]
  },
  "align-right": {
    "category": "Layout & UI",
    "tags": [
      "text",
      "format",
      "paragraph"
    ]
  },
  "align-justify": {
    "category": "Layout & UI",
    "tags": [
      "text",
      "format",
      "paragraph"
    ]
  },
  "bold": {
    "category": "Layout & UI",
    "tags": [
      "text",
      "format",
      "strong"
    ]
  },
  "italic": {
    "category": "Layout & UI",
    "tags": [
      "text",
      "format",
      "emphasis"
    ]
  },
  "underline": {
    "category": "Layout & UI",
    "tags": [
      "text",
      "format",
      "decoration"
    ]
  },
  "type": {
    "category": "Layout & UI",
    "tags": [
      "text",
      "font",
      "typography"
    ]
  },
  "layout": {
    "category": "Layout & UI",
    "tags": [
      "template",
      "page",
      "structure"
    ]
  },
  "panel-left": {
    "category": "Layout & UI",
    "tags": [
      "sidebar",
      "split",
      "pane"
    ]
  },
  "file": {
    "category": "Files & Folders",
    "tags": [
      "document",
      "page",
      "paper"
    ]
  },
  "file-text": {
    "category": "Files & Folders",
    "tags": [
      "document",
      "text",
      "content"
    ]
  },
  "folder": {
    "category": "Files & Folders",
    "tags": [
      "directory",
      "group"
    ]
  },
  "folder-open": {
    "category": "Files & Folders",
    "tags": [
      "directory",
      "expanded"
    ]
  },
  "image": {
    "category": "Files & Folders",
    "tags": [
      "photo",
      "picture",
      "landscape"
    ]
  },
  "code": {
    "category": "Files & Folders",
    "tags": [
      "programming",
      "brackets",
      "html"
    ]
  },
  "terminal": {
    "category": "Files & Folders",
    "tags": [
      "console",
      "cli",
      "command-line",
      "prompt"
    ]
  },
  "archive": {
    "category": "Files & Folders",
    "tags": [
      "box",
      "store",
      "compress"
    ]
  },
  "database": {
    "category": "Files & Folders",
    "tags": [
      "db",
      "storage",
      "data",
      "sql"
    ]
  },
  "hard-drive": {
    "category": "Files & Folders",
    "tags": [
      "storage",
      "disk",
      "drive"
    ]
  },
  "file-plus": {
    "category": "Files & Folders",
    "tags": [
      "new",
      "create",
      "add"
    ]
  },
  "file-minus": {
    "category": "Files & Folders",
    "tags": [
      "remove",
      "delete"
    ]
  },
  "folder-plus": {
    "category": "Files & Folders",
    "tags": [
      "new",
      "create",
      "directory"
    ]
  },
  "file-code": {
    "category": "Files & Folders",
    "tags": [
      "source",
      "programming",
      "script"
    ]
  },
  "file-image": {
    "category": "Files & Folders",
    "tags": [
      "photo",
      "picture",
      "media"
    ]
  },
  "cloud-upload": {
    "category": "Files & Folders",
    "tags": [
      "upload",
      "deploy",
      "sync"
    ]
  },
  "mail": {
    "category": "Communication",
    "tags": [
      "email",
      "envelope",
      "message"
    ]
  },
  "message-square": {
    "category": "Communication",
    "tags": [
      "chat",
      "bubble",
      "comment"
    ]
  },
  "phone": {
    "category": "Communication",
    "tags": [
      "call",
      "telephone",
      "contact"
    ]
  },
  "bell": {
    "category": "Communication",
    "tags": [
      "notification",
      "alert",
      "ring"
    ]
  },
  "at-sign": {
    "category": "Communication",
    "tags": [
      "email",
      "mention",
      "address"
    ]
  },
  "inbox": {
    "category": "Communication",
    "tags": [
      "mailbox",
      "receive",
      "tray"
    ]
  },
  "paperclip": {
    "category": "Communication",
    "tags": [
      "attachment",
      "attach",
      "link"
    ]
  },
  "link": {
    "category": "Communication",
    "tags": [
      "chain",
      "url",
      "hyperlink"
    ]
  },
  "message-circle": {
    "category": "Communication",
    "tags": [
      "chat",
      "bubble",
      "round"
    ]
  },
  "phone-call": {
    "category": "Communication",
    "tags": [
      "ring",
      "calling",
      "incoming"
    ]
  },
  "phone-off": {
    "category": "Communication",
    "tags": [
      "hang-up",
      "end",
      "mute"
    ]
  },
  "video": {
    "category": "Communication",
    "tags": [
      "camera",
      "record",
      "stream"
    ]
  },
  "rss": {
    "category": "Communication",
    "tags": [
      "feed",
      "subscribe",
      "blog"
    ]
  },
  "play": {
    "category": "Media",
    "tags": [
      "start",
      "video",
      "audio",
      "begin"
    ]
  },
  "pause": {
    "category": "Media",
    "tags": [
      "hold",
      "wait",
      "suspend"
    ]
  },
  "stop-circle": {
    "category": "Media",
    "tags": [
      "stop",
      "end",
      "halt"
    ]
  },
  "skip-forward": {
    "category": "Media",
    "tags": [
      "next",
      "fast-forward"
    ]
  },
  "skip-back": {
    "category": "Media",
    "tags": [
      "previous",
      "rewind"
    ]
  },
  "volume": {
    "category": "Media",
    "tags": [
      "sound",
      "speaker",
      "audio"
    ]
  },
  "volume-1": {
    "category": "Media",
    "tags": [
      "sound",
      "speaker",
      "low"
    ]
  },
  "volume-2": {
    "category": "Media",
    "tags": [
      "sound",
      "speaker",
      "high"
    ]
  },
  "volume-x": {
    "category": "Media",
    "tags": [
      "mute",
      "silent",
      "no-sound"
    ]
  },
  "mic": {
    "category": "Media",
    "tags": [
      "microphone",
      "record",
      "voice"
    ]
  },
  "camera": {
    "category": "Media",
    "tags": [
      "photo",
      "picture",
      "capture"
    ]
  },
  "film": {
    "category": "Media",
    "tags": [
      "movie",
      "cinema",
      "video"
    ]
  },
  "radio": {
    "category": "Media",
    "tags": [
      "broadcast",
      "signal",
      "wireless"
    ]
  },
  "headphones": {
    "category": "Media",
    "tags": [
      "audio",
      "music",
      "listen"
    ]
  },
  "music": {
    "category": "Media",
    "tags": [
      "note",
      "song",
      "audio"
    ]
  },
  "airplay": {
    "category": "Media",
    "tags": [
      "stream",
      "cast",
      "wireless"
    ]
  },
  "circle": {
    "category": "Shapes & Symbols",
    "tags": [
      "round",
      "dot",
      "shape"
    ]
  },
  "square": {
    "category": "Shapes & Symbols",
    "tags": [
      "box",
      "rectangle",
      "shape"
    ]
  },
  "triangle": {
    "category": "Shapes & Symbols",
    "tags": [
      "shape",
      "delta",
      "polygon"
    ]
  },
  "star": {
    "category": "Shapes & Symbols",
    "tags": [
      "favorite",
      "rating",
      "bookmark"
    ]
  },
  "heart": {
    "category": "Shapes & Symbols",
    "tags": [
      "love",
      "like",
      "favorite"
    ]
  },
  "flag": {
    "category": "Shapes & Symbols",
    "tags": [
      "report",
      "country",
      "marker"
    ]
  },
  "bookmark": {
    "category": "Shapes & Symbols",
    "tags": [
      "save",
      "favorite",
      "flag"
    ]
  },
  "hash": {
    "category": "Shapes & Symbols",
    "tags": [
      "number",
      "pound",
      "hashtag"
    ]
  },
  "help-circle": {
    "category": "Shapes & Symbols",
    "tags": [
      "question",
      "support",
      "faq"
    ]
  },
  "alert-circle": {
    "category": "Shapes & Symbols",
    "tags": [
      "warning",
      "error",
      "exclamation"
    ]
  },
  "check-circle": {
    "category": "Shapes & Symbols",
    "tags": [
      "done",
      "success",
      "verified"
    ]
  },
  "x-circle": {
    "category": "Shapes & Symbols",
    "tags": [
      "close",
      "error",
      "cancel"
    ]
  },
  "plus-circle": {
    "category": "Shapes & Symbols",
    "tags": [
      "add",
      "create",
      "new"
    ]
  },
  "minus-circle": {
    "category": "Shapes & Symbols",
    "tags": [
      "remove",
      "subtract",
      "delete"
    ]
  },
  "thumbs-down": {
    "category": "Shapes & Symbols",
    "tags": [
      "dislike",
      "reject",
      "bad"
    ]
  },
  "award": {
    "category": "Shapes & Symbols",
    "tags": [
      "medal",
      "prize",
      "trophy"
    ]
  },
  "sparkle": {
    "category": "Shapes & Symbols",
    "tags": [
      "magic",
      "new",
      "ai",
      "glitter"
    ]
  },
  "infinity": {
    "category": "Shapes & Symbols",
    "tags": [
      "loop",
      "forever",
      "unlimited"
    ]
  },
  "user": {
    "category": "Users & Social",
    "tags": [
      "person",
      "profile",
      "account"
    ]
  },
  "users": {
    "category": "Users & Social",
    "tags": [
      "people",
      "group",
      "team"
    ]
  },
  "user-plus": {
    "category": "Users & Social",
    "tags": [
      "add-user",
      "invite",
      "register"
    ]
  },
  "user-minus": {
    "category": "Users & Social",
    "tags": [
      "remove-user",
      "delete",
      "ban"
    ]
  },
  "user-check": {
    "category": "Users & Social",
    "tags": [
      "verified",
      "approved",
      "active"
    ]
  },
  "user-x": {
    "category": "Users & Social",
    "tags": [
      "remove-user",
      "block",
      "reject"
    ]
  },
  "github": {
    "category": "Users & Social",
    "tags": [
      "code",
      "repository",
      "git"
    ]
  },
  "twitter": {
    "category": "Users & Social",
    "tags": [
      "social",
      "tweet",
      "x"
    ]
  },
  "globe": {
    "category": "Users & Social",
    "tags": [
      "world",
      "web",
      "international"
    ]
  },
  "shopping-cart": {
    "category": "Commerce",
    "tags": [
      "cart",
      "buy",
      "purchase",
      "basket"
    ]
  },
  "shopping-bag": {
    "category": "Commerce",
    "tags": [
      "bag",
      "buy",
      "purchase",
      "store"
    ]
  },
  "credit-card": {
    "category": "Commerce",
    "tags": [
      "payment",
      "card",
      "visa"
    ]
  },
  "dollar-sign": {
    "category": "Commerce",
    "tags": [
      "money",
      "currency",
      "price"
    ]
  },
  "tag": {
    "category": "Commerce",
    "tags": [
      "label",
      "price",
      "category"
    ]
  },
  "percent": {
    "category": "Commerce",
    "tags": [
      "discount",
      "sale",
      "percentage"
    ]
  },
  "receipt": {
    "category": "Commerce",
    "tags": [
      "invoice",
      "bill",
      "ticket"
    ]
  },
  "gift": {
    "category": "Commerce",
    "tags": [
      "present",
      "reward",
      "bonus"
    ]
  },
  "truck": {
    "category": "Commerce",
    "tags": [
      "delivery",
      "shipping",
      "transport"
    ]
  },
  "package": {
    "category": "Commerce",
    "tags": [
      "box",
      "parcel",
      "shipment"
    ]
  },
  "wallet": {
    "category": "Commerce",
    "tags": [
      "money",
      "payment",
      "billfold"
    ]
  },
  "lock": {
    "category": "Security",
    "tags": [
      "secure",
      "password",
      "protected"
    ]
  },
  "unlock": {
    "category": "Security",
    "tags": [
      "open",
      "access",
      "unsecure"
    ]
  },
  "shield": {
    "category": "Security",
    "tags": [
      "protect",
      "security",
      "guard"
    ]
  },
  "key": {
    "category": "Security",
    "tags": [
      "password",
      "access",
      "credential"
    ]
  },
  "alert-triangle": {
    "category": "Security",
    "tags": [
      "warning",
      "caution",
      "danger"
    ]
  },
  "shield-check": {
    "category": "Security",
    "tags": [
      "verified",
      "safe",
      "approved"
    ]
  },
  "shield-x": {
    "category": "Security",
    "tags": [
      "blocked",
      "denied",
      "unsafe"
    ]
  },
  "fingerprint": {
    "category": "Security",
    "tags": [
      "biometric",
      "identity",
      "auth"
    ]
  },
  "clock": {
    "category": "Misc",
    "tags": [
      "time",
      "hour",
      "watch",
      "schedule"
    ]
  },
  "calendar": {
    "category": "Misc",
    "tags": [
      "date",
      "schedule",
      "event",
      "month"
    ]
  },
  "map-pin": {
    "category": "Misc",
    "tags": [
      "location",
      "marker",
      "place"
    ]
  },
  "sun": {
    "category": "Misc",
    "tags": [
      "light",
      "day",
      "bright",
      "theme"
    ]
  },
  "moon": {
    "category": "Misc",
    "tags": [
      "night",
      "dark",
      "sleep",
      "theme"
    ]
  },
  "cloud": {
    "category": "Misc",
    "tags": [
      "hosting",
      "storage",
      "weather"
    ]
  },
  "wifi": {
    "category": "Misc",
    "tags": [
      "internet",
      "wireless",
      "signal"
    ]
  },
  "battery": {
    "category": "Misc",
    "tags": [
      "power",
      "charge",
      "energy",
      "empty"
    ]
  },
  "battery-low": {
    "category": "Misc",
    "tags": [
      "power",
      "charge",
      "energy",
      "quarter",
      "25"
    ]
  },
  "battery-medium": {
    "category": "Misc",
    "tags": [
      "power",
      "charge",
      "energy",
      "half",
      "50"
    ]
  },
  "battery-high": {
    "category": "Misc",
    "tags": [
      "power",
      "charge",
      "energy",
      "three-quarter",
      "75"
    ]
  },
  "battery-full": {
    "category": "Misc",
    "tags": [
      "power",
      "charge",
      "energy",
      "complete",
      "100"
    ]
  },
  "loader": {
    "category": "Misc",
    "tags": [
      "spinner",
      "loading",
      "wait"
    ]
  },
  "info": {
    "category": "Misc",
    "tags": [
      "information",
      "help",
      "about"
    ]
  },
  "monitor": {
    "category": "Misc",
    "tags": [
      "screen",
      "display",
      "desktop"
    ]
  },
  "smartphone": {
    "category": "Misc",
    "tags": [
      "mobile",
      "phone",
      "device"
    ]
  },
  "tablet": {
    "category": "Misc",
    "tags": [
      "ipad",
      "device",
      "mobile"
    ]
  },
  "laptop": {
    "category": "Misc",
    "tags": [
      "computer",
      "notebook",
      "device"
    ]
  },
  "printer": {
    "category": "Misc",
    "tags": [
      "print",
      "paper",
      "output"
    ]
  },
  "cpu": {
    "category": "Misc",
    "tags": [
      "processor",
      "chip",
      "hardware"
    ]
  },
  "server": {
    "category": "Misc",
    "tags": [
      "hosting",
      "rack",
      "backend"
    ]
  },
  "bluetooth": {
    "category": "Misc",
    "tags": [
      "wireless",
      "connect",
      "pair"
    ]
  },
  "cast": {
    "category": "Misc",
    "tags": [
      "stream",
      "chromecast",
      "screen"
    ]
  },
  "bar-chart": {
    "category": "Misc",
    "tags": [
      "graph",
      "stats",
      "analytics"
    ]
  },
  "pie-chart": {
    "category": "Misc",
    "tags": [
      "graph",
      "stats",
      "analytics"
    ]
  },
  "trending-up": {
    "category": "Misc",
    "tags": [
      "growth",
      "increase",
      "profit"
    ]
  },
  "trending-down": {
    "category": "Misc",
    "tags": [
      "decline",
      "decrease",
      "loss"
    ]
  },
  "activity": {
    "category": "Misc",
    "tags": [
      "pulse",
      "health",
      "heartbeat"
    ]
  },
  "map": {
    "category": "Misc",
    "tags": [
      "geography",
      "directions",
      "atlas"
    ]
  },
  "thermometer": {
    "category": "Misc",
    "tags": [
      "temperature",
      "weather",
      "heat"
    ]
  },
  "droplet": {
    "category": "Misc",
    "tags": [
      "water",
      "rain",
      "liquid"
    ]
  },
  "feather": {
    "category": "Misc",
    "tags": [
      "light",
      "quill",
      "write"
    ]
  }
} as const
