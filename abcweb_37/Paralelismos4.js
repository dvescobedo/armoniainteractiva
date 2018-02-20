//########################################
//# This page contains score data, timing data and the media file path. Save it as a text file in
//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the
//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name
//# Also works locally with file:///path/to/abcweb.html?file_name
//# **** You have to correct the path to the media file below! (media_file="...";) ****
//########################################
//#
media_file = "../sound/Paralelismos4.mp3";
offset_js = 0.00;
opt = {"jump":0,"no_menu":1,"repufld":0,"noplyr":false,"nocsr":0,"media_height":"","btns":1,"ipadr":"","mstr":0,"autscl":1,"ctrmed":true,"ctrnot":true,"lncsr":0,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"","nomed":0,"delay":0,"repskip":false,"spdctl":true,"lopctl":0,"metro":false};
times_arr = [[0.00,2.00,4.00,6.00,8.00]];
abc_arr = ["X:1",
"%%scale 1.1",
"%%pagewidth 10.0cm",
"%%leftmargin 1.00cm",
"%%rightmargin 1.00cm",
"%%score { 1 | 2 }",
"L:1/4",
"M:4/4",
"I:linebreak $",
"K:C",
"V:1 treble",
"V:2 bass ",
"V:1",
"\"^Bien\" [GB]4 |\"^✔\" [Gc]4 || \"^Error\"  [DG]4 |\"^✘\" [Ec]4 | %4",
"V:2",
"\"_C:\" [G,D]4 | [C,E]4 || [G,B,]4 | [C,C]4 | %4",
"w: V|I|V|I|",
""];
abc_enc = [];
