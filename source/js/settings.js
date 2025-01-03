const discordChannels = [
	{title: `#channel`, hook: `hook code`},
];

const discordTags = [
    {alias: `Name`, id: `ID`},
];

const discordRoles = [
    {title: `Open`, id: `&ID`},
];

const uploads = `uploads2`;
const siteName = `sitename`;
const fileTypes = ['gif', 'jpg', 'jpeg', 'png'];
const staffDiscordRole = `ID`;

const colors = {
    'group': [0, 0, 0],
}

const unusable = ['premium species', 'premium group', 'custom complex event', 'custom discord role & icon', 'custom event', 'custom subplot'];

const staffGroups = ['4'];
const oocGroups = [...staffGroups, '6'];
const optGroups = ['1', '3', '5'];

const templateWraps = `tag-wrap`;
const markdownSafe = `.markdown, .postcolor.no-template, .postcolor blockquote, .postcolor [data-markdown]`;

/** auto-tracker code by FizzyElf - https://fizzyelf.jcink.net **/
trackerParams = {
    //include
    includeCategoryIds: [],
    includeForumIds: [],
    ignoreForumIds: [],

    //define au, comm, dev, archive forums
    historyForumIds: [], //history
    commForumIds: [], //comm
    commHistoryForumIds: [], //comm history
    socialForumIds: [], //social
    socialHistoryForumIds: [], //social history
    devForumIds: [], //dev
    devHistoryForumIds: [], //dev history
    reqForumIds: [], //requests
    reqHistoryForumIds: [], //request history
    eventForumIds: [], //events
    eventHistoryForumIds: [], //event history
}

const fullWidthFields = [];
const thirdWidthFields = [];
const setHeightFields = [];

//toggle fields: account type, power type, image type
const toggleFields = createFieldArray([0, 0], true);
const characterFields = createFieldArray([]);

const defaultImages = createFieldArray([]);
const gridImages = createFieldArray([]);
const mosaicImages = createFieldArray([]);

const avatarImageFields = createFieldArray([]);

const aestheticFields = {
    'single': {
        showFields: defaultImages,
        hideFields: [...gridImages, ...mosaicImages],
    },
    'grid': {
        showFields: [...defaultImages, ...gridImages],
        hideFields: [...mosaicImages],
    },
    'mosaic': {
        showFields: [...defaultImages, ...gridImages, ...mosaicImages],
        hideFields: [],
    }
};

const allHeaders = [
    {
        sectionTitle: `Player`,
        insertBefore: 0,
        sectionDescription: ``,
    },
    {
        sectionTitle: `Images`,
        insertBefore: 0,
        sectionDescription: ``,
    },
    {
        sectionTitle: `Customization`,
        insertBefore: 0,
        sectionDescription: ``,
    },
];
const charHeaders = [
    {
        sectionTitle: `Basics`,
        insertBefore: 0,
        sectionDescription: ``,
    },
    {
        sectionTitle: `Details`,
        insertBefore: 0,
        sectionDescription: ``,
    },
    {
        sectionTitle: `Plotting`,
        insertBefore: 0,
        sectionDescription: ``,
    },
    {
        sectionTitle: `Links`,
        insertBefore: 0,
        sectionDescription: ``,
    },
];

const sheetID = '';
const deployID = '';

const reserveLogs = ``;
const businessLogs = ``;
const claimLogs = ``;
const modLogs = ``;
const staffLogs = ``;
const sortLogs = ``;
const announceLogs = ``;

const claims = `https://opensheet.elk.sh/${sheetID}/Claims`;
const faceReserves = `https://opensheet.elk.sh/${sheetID}/FaceReserves`;
const plotReserves = `https://opensheet.elk.sh/${sheetID}/PlotReserves`;
const members = `https://opensheet.elk.sh/${sheetID}/Members`;
const plots = `https://opensheet.elk.sh/${sheetID}/Plots`;
const businesses = `https://opensheet.elk.sh/${sheetID}/Businesses`;

const defaultReserve = 14;
const successMessage = `<blockquote class="fullWidth">Submission successful!</blockquote>
<button onclick="reloadForm(this)" type="button" class="fullWidth submit">Back to form</button>`;
const activeResExists = `<blockquote class="fullWidth warning">Uh-oh! That's already reserved. Maybe we can help you find another option - reach out in the Discord for help!</blockquote>`;
const prevResExists = `<blockquote class="fullWidth warning">Uh-oh! You've reserved that before! Reserves are non-renewable. If you don't remember doing this, please reach out to staff via Discord and we can review our records and discuss options with you!</blockquote>`;
const claimExists = `<blockquote class="fullWidth warning">Uh-oh! This is already in play! Maybe we can help you find another option - reach out in the Discord for help!</blockquote>`;
const limitReached = `<blockquote class="fullWidth warning">Uh-oh! This role has limited spots and it looks like they're all taken and/or reserved at this moment!</blockquote>`;

const jcinkUCPLinks = `<div class="accordion--trigger" data-category="account"><b>Account</b></div>
        <div class="accordion--content" data-category="account">
            <a href="?act=UserCP&CODE=01">Edit Profile</a>
            <a href="?act=UserCP&CODE=24">Update Avatar</a>
            <a href="?act=UserCP&CODE=54">Sub-accounts</a>
            <a href="?act=UserCP&CODE=52">Edit Username</a>
            <a href="?act=UserCP&CODE=28">Change Password</a>
            <a href="?act=UserCP&CODE=08">Update Email</a>
        </div>
        <div class="accordion--trigger" data-category="messages"><b>Messages</b></div>
        <div class="accordion--content" data-category="messages">
            <a href="?act=Msg&CODE=01">Inbox</a>
            <a href="?act=Msg&CODE=04">Send Message</a>
        </div>
        <div class="accordion--trigger" data-category="tracking"><b>Tracking</b></div>
        <div class="accordion--content" data-category="tracking">
            <a href="?act=UserCP&CODE=alerts">Alerts</a>
            <a href="?act=UserCP&CODE=50">Forums</a>
            <a href="?act=UserCP&CODE=26">Topics</a>
        </div>
        <div class="accordion--trigger" data-category="settings"><b>Settings</b></div>
        <div class="accordion--content" data-category="settings">
            <a href="?act=UserCP&CODE=04">Board</a>
            <a href="?act=UserCP&CODE=alerts_settings">Alerts</a>
            <a href="?act=UserCP&CODE=02">Emails</a>
        </div>`;

const jcinkStoreLinks = `<div class="accordion--trigger" data-category="personal"><b>Personal</b></div>
        <div class="accordion--content" data-category="personal">
            <a href="?act=store&CODE=inventory">Inventory</a>
            <a href="?act=store&code=donate_money">Send Money</a>
            <a href="?act=store&code=donate_item">Send Item</a>
        </div>
        <div class="accordion--trigger" data-category="shop"><b>Shop</b></div>
        <div class="accordion--content" data-category="shop">
            <a href="?act=store">Home</a>
            <a href="?act=store&code=shop&category=000">Category</a>
        </div>
        <div class="accordion--trigger staffOnly" data-category="staff"><b>Staff</b></div>
        <div class="accordion--content staffOnly" data-category="staff">
            <a href="?act=store&code=fine" class="staffOnly">Fine</a>
            <a href="?act=store&code=edit_points" class="staffOnly">Edit Points</a>
            <a href="?act=store&code=edit_inventory" class="staffOnly">Edit Inventory</a>
        </div>`;

const jcinkModCPLinks = `<div class="accordion--trigger" data-category="forumsposts"><b>Forums & Posts</b></div>
        <div class="accordion--content" data-category="forumsposts">
            <a href="?act=modcp&CODE=queue">Queue</a>
            <a href="?act=modcp&CODE=reported">Reported</a>
            <a href="?act=modcp&CODE=modlogs">Logs</a>
            <a href="?act=modcp&CODE=prune">Prune</a>
        </div>
        <div class="accordion--trigger" data-category="users"><b>Users</b></div>
        <div class="accordion--content" data-category="users">
            <a href="?act=modcp&CODE=members">Edit</a>
            <a href="?act=modcp&CODE=warnpanel">Warn</a>
            <a href="?act=modcp&CODE=warnlogs">Logs</a>
            <a href="?act=modcp&CODE=ip">IP Tools</a>
            <a href="?act=modcp&CODE=validating">Validaion</a>
        </div>`;