# LaterGator - Purge your "Watch Later"! 🐊📺🧹
*When you just can't be bothered to watch those videos anymore.*  

**LaterGator** is a tool designed to help you manage your Watch Later playlist on YouTube. With LaterGator, you can easily and quickly remove videos from your Watch Later playlist, freeing up time and reducing clutter.

## Getting Started
Currently to use LaterGator you have to do following steps:  

1. Open your <u>[Watch Later](https://www.youtube.com/playlist?list=WL)</u> in your favourite browser and perhaps order the playlist as desired. 
2.  Open the developers console
    - Chrome: `CTRL + Shift + J` or `Option + ⌘ + J`
    - Edge: `F12`
    - Firefox: `CTRL + Shift + K` or `CTRL + Option + K`
3. Copy the contents of `latergator.js` into the console and press ENTER
4. Enjoy the purge! 🐊

To stop LatorGator, type the following in the console: `LATERGATOR.stop();`

## Configuration  
Later Gator allowing you to configure various settings to your preferences. You can edit the configuration options at the bottom of the `latergator.js` file. Some of the available options include:

* `batchSize`: How many videos to remove in one iteration, YouTube API has a limit on 200, so going above is useless
* `waitBetweenBatches`: How long to wait between batches in milliseconds (5 min. recommended) 
  * To calculate the number of minutes multiply your number in minutes by 1000 and by 60 (e.g. `1000 * 60 * 5` for 5 minutes)
* `waitBetweenDeletions`: Milliseconds between each deletion
* `playlistSize`: How many videos in the playlist

### Language settings
Depending on your language settings you may need to tweak 2 values in the code: 
Once on line 23,
```
this.currentVideovideo.querySelector('#primary button[aria-label="Action Menu"]').click();
```
and once on line 27.
```
'//span[contains(text(),"Remove from")]',
```

| Language      | Line 23 | Line 27 |
| ----------- | ----------- | ----------- |
| English      | "`Action Menu`"       | "`Remove from`"  |
| French      | "`Menu d\'actions`"        | "`Supprimer de`"  |
| Dutch      | "`Actiemenu`"       | "`Verwijderen uit`"  |
| German      | "`Aktionsmenü`"        | "`Aus`"  |
| Czech      | "`Nabídka akcí`"        | "`Odstranit ze seznamu`"  |
| Polish      | "`Menu czynności`"        | "`Usuń z`"  |

## Known issues
* Sometimes the program doesn't continue after the batch sleep timeout

## Todos
- [X] Implement LaterGator
- [ ] Create LaterGator extention
- [ ] ...

## Contributing  
If you'd like to contribute to LaterGator or ave any ideas for features or improvements, feel free to submit a pull request or open an issue.

## License & Disclaimer
LaterGator is released under the **<u>[MIT License](https://opensource.org/licenses/MIT)</u>**.  

The playlist's videos will all be removed by LaterGator. The contents cannot be recovered afterwards! Only use the particular playlist that you wish to empty.