class LaterGator {

    constructor(batchSize = 200, waitBetweenBatches = 1000 * 60 * 5, waitBetweenDeletions = 500, playlistSize= 5000) {
        this.batchSize = batchSize;
        this.waitBetweenBatches = waitBetweenBatches;
        this.waitBetweenDeletions = waitBetweenDeletions;
        this.playlistSize = playlistSize;
        this.currentVideo = "";
        this.running = true;
    }

    deleteVideoFromWatchLater() {
        this.currentVideovideo = document.getElementsByTagName('ytd-playlist-video-renderer')[0];
        // Change the 2 variables to your fit your language settings.
        // CURRENT SETTINGS ARE DUTCH
        // English: "Action Menu"         "Remove from"
        // French:  "Menu d\'actions"     "Supprimer de"
        // Dutch:   "Actiemenu"           "Verwijderen uit"
        // German:  "Aktionsmenü"         "Aus"
        // Czech:   "Nabídka akcí"        "Odstranit ze seznamu"
        // Polish:  "Menu czynności"      "Usuń z"
        //  > > > > > > > > > > > > > > > > > > > > > > > > > > > > >    ↓↓↓↓↓↓↓↓↓↓↓
        this.currentVideovideo.querySelector('#primary button[aria-label="Actiemenu"]').click();
        let elements = document.evaluate(
            // Change this one too to fit your language settings.
            // > > > > > > > > > > >  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
            '//span[contains(text(),"Verwijderen uit")]',
            document,
            null,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null
        );
        for (let i = 0; i < elements.snapshotLength; i++) {
            elements.snapshotItem(i).click();
        }
    }

    async stop() {
        console.log("[LATERGATOR] Stopping LatorGator...")
        this.running = false;
    }

    async run() {   
        console.log(`**********************\n`) 
        const consoleOutputs = [
            "[LATERGATOR] Say goodbye to your Watch Later playlist! LaterGator is on the case.",
            "[LATERGATOR] LaterGator has arrived to clean up your messy Watch Later playlist.",
            "[LATERGATOR] LaterGator is like a personal assistant, but for destroying your Watch Later playlist.",
            "[LATERGATOR] LaterGator: When you just can't be bothered to watch those videos anymore.",
            "[LATERGATOR] Your Watch Later playlist is about to get a visit from LaterGator, and it's not going to be pretty.",
            "[LATERGATOR] LaterGator is here to do the dirty work of cleaning up your Watch Later playlist.",
            "[LATERGATOR] LaterGator: Because who has time to actually watch all those videos?",
            "[LATERGATOR] LaterGator is like a ninja, silently removing videos from your Watch Later playlist.",
            "[LATERGATOR] Your Watch Later playlist is about to get a taste of LaterGator's jaws."
          ];
        setTimeout(7500);

        console.log(consoleOutputs[Math.floor(Math.random() * consoleOutputs.length)]);
        const TOTAL_TIME = ((this.playlistSize / this.batchSize) * (this.waitBetweenBatches / 1000 / 60)) + (this.playlistSize * (this.waitBetweenDeletions / 1000 / 60))
        console.log(`[LATERGATOR] With the current parameters, a full playlist should take around ${TOTAL_TIME} minutes.`);
        
        let count = 0;
        while (this.running) {
            await new Promise(resolve => setTimeout(resolve, this.waitBetweenDeletions));
            this.deleteVideoFromWatchLater();
            count++;

            if (count % this.batchSize === 0 && count !== 0) {
                console.log('[LATERGATOR] Should wait for 5 minutes now... YouTube API only allows 200 requests');
                await new Promise(resolve => setTimeout(this.waitBetweenBatches));
                console.log('[LATERGATOR] Continuing...');
            }
        }
    }
}

let batchSize = 200; // How many videos to remove in one iteration, YouTube API has a limit on 200, so going above is useless
let waitBetweenBatches = 1000 * 60 * 5; // 5 minute wait between batches.
let waitBetweenDeletions= 500; // 0.5 seconds between each deletion.
let playlistSize = 5000; // How many videos in the playlist.

const LATERGATOR = new LaterGator(batchSize, waitBetweenBatches, waitBetweenDeletions, playlistSize);
LATERGATOR.run();