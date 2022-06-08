/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 6801.0, "series": [{"data": [[0.0, 28.0], [0.1, 28.0], [0.2, 28.0], [0.3, 28.0], [0.4, 28.0], [0.5, 28.0], [0.6, 29.0], [0.7, 29.0], [0.8, 29.0], [0.9, 29.0], [1.0, 29.0], [1.1, 29.0], [1.2, 29.0], [1.3, 29.0], [1.4, 29.0], [1.5, 29.0], [1.6, 29.0], [1.7, 29.0], [1.8, 29.0], [1.9, 29.0], [2.0, 29.0], [2.1, 29.0], [2.2, 29.0], [2.3, 29.0], [2.4, 29.0], [2.5, 29.0], [2.6, 29.0], [2.7, 29.0], [2.8, 29.0], [2.9, 29.0], [3.0, 30.0], [3.1, 30.0], [3.2, 30.0], [3.3, 30.0], [3.4, 30.0], [3.5, 30.0], [3.6, 30.0], [3.7, 30.0], [3.8, 30.0], [3.9, 30.0], [4.0, 30.0], [4.1, 30.0], [4.2, 30.0], [4.3, 30.0], [4.4, 30.0], [4.5, 30.0], [4.6, 30.0], [4.7, 30.0], [4.8, 30.0], [4.9, 30.0], [5.0, 30.0], [5.1, 30.0], [5.2, 30.0], [5.3, 30.0], [5.4, 30.0], [5.5, 30.0], [5.6, 30.0], [5.7, 30.0], [5.8, 30.0], [5.9, 30.0], [6.0, 30.0], [6.1, 30.0], [6.2, 30.0], [6.3, 30.0], [6.4, 30.0], [6.5, 30.0], [6.6, 30.0], [6.7, 30.0], [6.8, 31.0], [6.9, 31.0], [7.0, 31.0], [7.1, 31.0], [7.2, 31.0], [7.3, 31.0], [7.4, 31.0], [7.5, 31.0], [7.6, 31.0], [7.7, 31.0], [7.8, 31.0], [7.9, 31.0], [8.0, 31.0], [8.1, 31.0], [8.2, 31.0], [8.3, 31.0], [8.4, 31.0], [8.5, 31.0], [8.6, 31.0], [8.7, 31.0], [8.8, 31.0], [8.9, 31.0], [9.0, 31.0], [9.1, 31.0], [9.2, 31.0], [9.3, 31.0], [9.4, 31.0], [9.5, 31.0], [9.6, 31.0], [9.7, 31.0], [9.8, 31.0], [9.9, 31.0], [10.0, 31.0], [10.1, 31.0], [10.2, 31.0], [10.3, 31.0], [10.4, 31.0], [10.5, 31.0], [10.6, 31.0], [10.7, 31.0], [10.8, 31.0], [10.9, 32.0], [11.0, 32.0], [11.1, 32.0], [11.2, 32.0], [11.3, 32.0], [11.4, 32.0], [11.5, 32.0], [11.6, 32.0], [11.7, 32.0], [11.8, 32.0], [11.9, 32.0], [12.0, 32.0], [12.1, 32.0], [12.2, 32.0], [12.3, 32.0], [12.4, 32.0], [12.5, 32.0], [12.6, 32.0], [12.7, 32.0], [12.8, 32.0], [12.9, 32.0], [13.0, 32.0], [13.1, 32.0], [13.2, 32.0], [13.3, 32.0], [13.4, 32.0], [13.5, 32.0], [13.6, 32.0], [13.7, 32.0], [13.8, 32.0], [13.9, 32.0], [14.0, 32.0], [14.1, 33.0], [14.2, 33.0], [14.3, 33.0], [14.4, 33.0], [14.5, 33.0], [14.6, 33.0], [14.7, 33.0], [14.8, 33.0], [14.9, 33.0], [15.0, 33.0], [15.1, 33.0], [15.2, 33.0], [15.3, 33.0], [15.4, 33.0], [15.5, 33.0], [15.6, 33.0], [15.7, 33.0], [15.8, 33.0], [15.9, 33.0], [16.0, 33.0], [16.1, 33.0], [16.2, 33.0], [16.3, 33.0], [16.4, 33.0], [16.5, 33.0], [16.6, 33.0], [16.7, 33.0], [16.8, 33.0], [16.9, 33.0], [17.0, 34.0], [17.1, 34.0], [17.2, 34.0], [17.3, 34.0], [17.4, 34.0], [17.5, 34.0], [17.6, 34.0], [17.7, 34.0], [17.8, 34.0], [17.9, 34.0], [18.0, 34.0], [18.1, 34.0], [18.2, 34.0], [18.3, 34.0], [18.4, 34.0], [18.5, 34.0], [18.6, 34.0], [18.7, 34.0], [18.8, 34.0], [18.9, 34.0], [19.0, 34.0], [19.1, 34.0], [19.2, 34.0], [19.3, 34.0], [19.4, 34.0], [19.5, 34.0], [19.6, 34.0], [19.7, 34.0], [19.8, 34.0], [19.9, 34.0], [20.0, 34.0], [20.1, 34.0], [20.2, 34.0], [20.3, 35.0], [20.4, 35.0], [20.5, 35.0], [20.6, 35.0], [20.7, 35.0], [20.8, 35.0], [20.9, 35.0], [21.0, 35.0], [21.1, 35.0], [21.2, 35.0], [21.3, 35.0], [21.4, 35.0], [21.5, 35.0], [21.6, 35.0], [21.7, 35.0], [21.8, 35.0], [21.9, 35.0], [22.0, 35.0], [22.1, 35.0], [22.2, 35.0], [22.3, 35.0], [22.4, 35.0], [22.5, 36.0], [22.6, 36.0], [22.7, 36.0], [22.8, 36.0], [22.9, 36.0], [23.0, 36.0], [23.1, 36.0], [23.2, 36.0], [23.3, 36.0], [23.4, 36.0], [23.5, 36.0], [23.6, 36.0], [23.7, 36.0], [23.8, 36.0], [23.9, 36.0], [24.0, 36.0], [24.1, 36.0], [24.2, 36.0], [24.3, 36.0], [24.4, 36.0], [24.5, 36.0], [24.6, 36.0], [24.7, 36.0], [24.8, 36.0], [24.9, 37.0], [25.0, 37.0], [25.1, 37.0], [25.2, 37.0], [25.3, 37.0], [25.4, 37.0], [25.5, 37.0], [25.6, 37.0], [25.7, 37.0], [25.8, 37.0], [25.9, 37.0], [26.0, 37.0], [26.1, 37.0], [26.2, 37.0], [26.3, 37.0], [26.4, 37.0], [26.5, 37.0], [26.6, 37.0], [26.7, 37.0], [26.8, 37.0], [26.9, 37.0], [27.0, 37.0], [27.1, 37.0], [27.2, 37.0], [27.3, 37.0], [27.4, 37.0], [27.5, 37.0], [27.6, 37.0], [27.7, 38.0], [27.8, 38.0], [27.9, 38.0], [28.0, 38.0], [28.1, 38.0], [28.2, 38.0], [28.3, 38.0], [28.4, 38.0], [28.5, 38.0], [28.6, 38.0], [28.7, 38.0], [28.8, 38.0], [28.9, 38.0], [29.0, 38.0], [29.1, 38.0], [29.2, 38.0], [29.3, 38.0], [29.4, 38.0], [29.5, 38.0], [29.6, 38.0], [29.7, 38.0], [29.8, 38.0], [29.9, 38.0], [30.0, 38.0], [30.1, 38.0], [30.2, 39.0], [30.3, 39.0], [30.4, 39.0], [30.5, 39.0], [30.6, 39.0], [30.7, 39.0], [30.8, 39.0], [30.9, 39.0], [31.0, 39.0], [31.1, 39.0], [31.2, 39.0], [31.3, 39.0], [31.4, 39.0], [31.5, 39.0], [31.6, 39.0], [31.7, 39.0], [31.8, 39.0], [31.9, 39.0], [32.0, 39.0], [32.1, 40.0], [32.2, 40.0], [32.3, 40.0], [32.4, 40.0], [32.5, 40.0], [32.6, 40.0], [32.7, 40.0], [32.8, 40.0], [32.9, 40.0], [33.0, 40.0], [33.1, 40.0], [33.2, 40.0], [33.3, 40.0], [33.4, 40.0], [33.5, 40.0], [33.6, 40.0], [33.7, 40.0], [33.8, 41.0], [33.9, 41.0], [34.0, 41.0], [34.1, 41.0], [34.2, 41.0], [34.3, 41.0], [34.4, 41.0], [34.5, 41.0], [34.6, 41.0], [34.7, 41.0], [34.8, 41.0], [34.9, 41.0], [35.0, 41.0], [35.1, 41.0], [35.2, 42.0], [35.3, 42.0], [35.4, 42.0], [35.5, 42.0], [35.6, 42.0], [35.7, 42.0], [35.8, 42.0], [35.9, 42.0], [36.0, 42.0], [36.1, 42.0], [36.2, 42.0], [36.3, 42.0], [36.4, 42.0], [36.5, 42.0], [36.6, 42.0], [36.7, 42.0], [36.8, 42.0], [36.9, 42.0], [37.0, 43.0], [37.1, 43.0], [37.2, 43.0], [37.3, 43.0], [37.4, 43.0], [37.5, 43.0], [37.6, 43.0], [37.7, 43.0], [37.8, 43.0], [37.9, 43.0], [38.0, 43.0], [38.1, 43.0], [38.2, 43.0], [38.3, 44.0], [38.4, 44.0], [38.5, 44.0], [38.6, 44.0], [38.7, 44.0], [38.8, 44.0], [38.9, 44.0], [39.0, 44.0], [39.1, 44.0], [39.2, 45.0], [39.3, 45.0], [39.4, 45.0], [39.5, 45.0], [39.6, 45.0], [39.7, 45.0], [39.8, 46.0], [39.9, 46.0], [40.0, 46.0], [40.1, 46.0], [40.2, 46.0], [40.3, 46.0], [40.4, 46.0], [40.5, 46.0], [40.6, 46.0], [40.7, 46.0], [40.8, 47.0], [40.9, 47.0], [41.0, 47.0], [41.1, 47.0], [41.2, 47.0], [41.3, 48.0], [41.4, 48.0], [41.5, 48.0], [41.6, 48.0], [41.7, 48.0], [41.8, 48.0], [41.9, 48.0], [42.0, 48.0], [42.1, 48.0], [42.2, 48.0], [42.3, 49.0], [42.4, 49.0], [42.5, 49.0], [42.6, 49.0], [42.7, 50.0], [42.8, 50.0], [42.9, 50.0], [43.0, 50.0], [43.1, 50.0], [43.2, 50.0], [43.3, 51.0], [43.4, 51.0], [43.5, 51.0], [43.6, 51.0], [43.7, 52.0], [43.8, 52.0], [43.9, 52.0], [44.0, 52.0], [44.1, 52.0], [44.2, 52.0], [44.3, 52.0], [44.4, 52.0], [44.5, 52.0], [44.6, 52.0], [44.7, 53.0], [44.8, 53.0], [44.9, 53.0], [45.0, 53.0], [45.1, 53.0], [45.2, 53.0], [45.3, 54.0], [45.4, 54.0], [45.5, 54.0], [45.6, 54.0], [45.7, 54.0], [45.8, 54.0], [45.9, 55.0], [46.0, 55.0], [46.1, 55.0], [46.2, 56.0], [46.3, 56.0], [46.4, 56.0], [46.5, 56.0], [46.6, 56.0], [46.7, 56.0], [46.8, 56.0], [46.9, 56.0], [47.0, 57.0], [47.1, 57.0], [47.2, 57.0], [47.3, 57.0], [47.4, 57.0], [47.5, 58.0], [47.6, 58.0], [47.7, 58.0], [47.8, 59.0], [47.9, 59.0], [48.0, 59.0], [48.1, 59.0], [48.2, 59.0], [48.3, 60.0], [48.4, 60.0], [48.5, 60.0], [48.6, 60.0], [48.7, 60.0], [48.8, 61.0], [48.9, 61.0], [49.0, 61.0], [49.1, 61.0], [49.2, 61.0], [49.3, 61.0], [49.4, 61.0], [49.5, 62.0], [49.6, 62.0], [49.7, 62.0], [49.8, 62.0], [49.9, 62.0], [50.0, 62.0], [50.1, 63.0], [50.2, 63.0], [50.3, 63.0], [50.4, 63.0], [50.5, 64.0], [50.6, 64.0], [50.7, 64.0], [50.8, 64.0], [50.9, 64.0], [51.0, 65.0], [51.1, 65.0], [51.2, 66.0], [51.3, 66.0], [51.4, 66.0], [51.5, 66.0], [51.6, 67.0], [51.7, 67.0], [51.8, 67.0], [51.9, 68.0], [52.0, 68.0], [52.1, 68.0], [52.2, 68.0], [52.3, 69.0], [52.4, 69.0], [52.5, 69.0], [52.6, 70.0], [52.7, 70.0], [52.8, 70.0], [52.9, 71.0], [53.0, 71.0], [53.1, 71.0], [53.2, 72.0], [53.3, 72.0], [53.4, 72.0], [53.5, 72.0], [53.6, 72.0], [53.7, 74.0], [53.8, 74.0], [53.9, 74.0], [54.0, 75.0], [54.1, 76.0], [54.2, 76.0], [54.3, 76.0], [54.4, 76.0], [54.5, 77.0], [54.6, 77.0], [54.7, 77.0], [54.8, 77.0], [54.9, 78.0], [55.0, 79.0], [55.1, 79.0], [55.2, 79.0], [55.3, 79.0], [55.4, 81.0], [55.5, 82.0], [55.6, 82.0], [55.7, 83.0], [55.8, 83.0], [55.9, 83.0], [56.0, 84.0], [56.1, 85.0], [56.2, 85.0], [56.3, 86.0], [56.4, 87.0], [56.5, 87.0], [56.6, 87.0], [56.7, 88.0], [56.8, 88.0], [56.9, 88.0], [57.0, 88.0], [57.1, 89.0], [57.2, 89.0], [57.3, 89.0], [57.4, 90.0], [57.5, 91.0], [57.6, 91.0], [57.7, 92.0], [57.8, 93.0], [57.9, 93.0], [58.0, 93.0], [58.1, 94.0], [58.2, 96.0], [58.3, 97.0], [58.4, 97.0], [58.5, 97.0], [58.6, 97.0], [58.7, 98.0], [58.8, 98.0], [58.9, 99.0], [59.0, 100.0], [59.1, 101.0], [59.2, 105.0], [59.3, 105.0], [59.4, 105.0], [59.5, 106.0], [59.6, 107.0], [59.7, 108.0], [59.8, 108.0], [59.9, 110.0], [60.0, 111.0], [60.1, 112.0], [60.2, 113.0], [60.3, 113.0], [60.4, 114.0], [60.5, 114.0], [60.6, 115.0], [60.7, 115.0], [60.8, 116.0], [60.9, 116.0], [61.0, 116.0], [61.1, 117.0], [61.2, 118.0], [61.3, 120.0], [61.4, 121.0], [61.5, 121.0], [61.6, 122.0], [61.7, 122.0], [61.8, 129.0], [61.9, 129.0], [62.0, 130.0], [62.1, 132.0], [62.2, 132.0], [62.3, 133.0], [62.4, 134.0], [62.5, 135.0], [62.6, 138.0], [62.7, 140.0], [62.8, 140.0], [62.9, 142.0], [63.0, 146.0], [63.1, 149.0], [63.2, 150.0], [63.3, 151.0], [63.4, 153.0], [63.5, 154.0], [63.6, 158.0], [63.7, 160.0], [63.8, 160.0], [63.9, 163.0], [64.0, 166.0], [64.1, 169.0], [64.2, 170.0], [64.3, 170.0], [64.4, 175.0], [64.5, 176.0], [64.6, 178.0], [64.7, 181.0], [64.8, 181.0], [64.9, 191.0], [65.0, 194.0], [65.1, 195.0], [65.2, 196.0], [65.3, 198.0], [65.4, 208.0], [65.5, 212.0], [65.6, 213.0], [65.7, 217.0], [65.8, 221.0], [65.9, 223.0], [66.0, 224.0], [66.1, 225.0], [66.2, 229.0], [66.3, 231.0], [66.4, 235.0], [66.5, 240.0], [66.6, 240.0], [66.7, 243.0], [66.8, 246.0], [66.9, 256.0], [67.0, 258.0], [67.1, 259.0], [67.2, 260.0], [67.3, 267.0], [67.4, 276.0], [67.5, 276.0], [67.6, 280.0], [67.7, 281.0], [67.8, 289.0], [67.9, 289.0], [68.0, 295.0], [68.1, 301.0], [68.2, 304.0], [68.3, 307.0], [68.4, 309.0], [68.5, 314.0], [68.6, 330.0], [68.7, 334.0], [68.8, 344.0], [68.9, 348.0], [69.0, 354.0], [69.1, 362.0], [69.2, 363.0], [69.3, 370.0], [69.4, 376.0], [69.5, 377.0], [69.6, 383.0], [69.7, 385.0], [69.8, 387.0], [69.9, 401.0], [70.0, 403.0], [70.1, 414.0], [70.2, 417.0], [70.3, 423.0], [70.4, 431.0], [70.5, 438.0], [70.6, 445.0], [70.7, 452.0], [70.8, 457.0], [70.9, 466.0], [71.0, 472.0], [71.1, 480.0], [71.2, 490.0], [71.3, 491.0], [71.4, 498.0], [71.5, 498.0], [71.6, 502.0], [71.7, 506.0], [71.8, 507.0], [71.9, 517.0], [72.0, 523.0], [72.1, 539.0], [72.2, 547.0], [72.3, 552.0], [72.4, 563.0], [72.5, 566.0], [72.6, 606.0], [72.7, 627.0], [72.8, 637.0], [72.9, 652.0], [73.0, 673.0], [73.1, 677.0], [73.2, 736.0], [73.3, 744.0], [73.4, 755.0], [73.5, 768.0], [73.6, 779.0], [73.7, 788.0], [73.8, 802.0], [73.9, 813.0], [74.0, 839.0], [74.1, 846.0], [74.2, 869.0], [74.3, 883.0], [74.4, 887.0], [74.5, 915.0], [74.6, 916.0], [74.7, 930.0], [74.8, 940.0], [74.9, 951.0], [75.0, 966.0], [75.1, 966.0], [75.2, 969.0], [75.3, 979.0], [75.4, 980.0], [75.5, 1007.0], [75.6, 1011.0], [75.7, 1026.0], [75.8, 1035.0], [75.9, 1041.0], [76.0, 1067.0], [76.1, 1074.0], [76.2, 1095.0], [76.3, 1119.0], [76.4, 1119.0], [76.5, 1147.0], [76.6, 1169.0], [76.7, 1173.0], [76.8, 1196.0], [76.9, 1215.0], [77.0, 1234.0], [77.1, 1250.0], [77.2, 1259.0], [77.3, 1271.0], [77.4, 1281.0], [77.5, 1312.0], [77.6, 1330.0], [77.7, 1331.0], [77.8, 1343.0], [77.9, 1360.0], [78.0, 1370.0], [78.1, 1385.0], [78.2, 1389.0], [78.3, 1407.0], [78.4, 1432.0], [78.5, 1443.0], [78.6, 1453.0], [78.7, 1468.0], [78.8, 1488.0], [78.9, 1501.0], [79.0, 1503.0], [79.1, 1513.0], [79.2, 1519.0], [79.3, 1572.0], [79.4, 1606.0], [79.5, 1613.0], [79.6, 1638.0], [79.7, 1651.0], [79.8, 1661.0], [79.9, 1688.0], [80.0, 1697.0], [80.1, 1724.0], [80.2, 1737.0], [80.3, 1744.0], [80.4, 1759.0], [80.5, 1763.0], [80.6, 1792.0], [80.7, 1798.0], [80.8, 1818.0], [80.9, 1829.0], [81.0, 1830.0], [81.1, 1865.0], [81.2, 1888.0], [81.3, 1899.0], [81.4, 1922.0], [81.5, 1972.0], [81.6, 1986.0], [81.7, 1994.0], [81.8, 1995.0], [81.9, 2028.0], [82.0, 2053.0], [82.1, 2054.0], [82.2, 2072.0], [82.3, 2091.0], [82.4, 2100.0], [82.5, 2115.0], [82.6, 2135.0], [82.7, 2161.0], [82.8, 2215.0], [82.9, 2228.0], [83.0, 2251.0], [83.1, 2283.0], [83.2, 2288.0], [83.3, 2298.0], [83.4, 2412.0], [83.5, 2437.0], [83.6, 2469.0], [83.7, 2509.0], [83.8, 2563.0], [83.9, 2583.0], [84.0, 2638.0], [84.1, 2640.0], [84.2, 2722.0], [84.3, 2765.0], [84.4, 2778.0], [84.5, 2875.0], [84.6, 2876.0], [84.7, 2894.0], [84.8, 2976.0], [84.9, 2985.0], [85.0, 2997.0], [85.1, 3026.0], [85.2, 3051.0], [85.3, 3080.0], [85.4, 3102.0], [85.5, 3115.0], [85.6, 3130.0], [85.7, 3135.0], [85.8, 3145.0], [85.9, 3160.0], [86.0, 3183.0], [86.1, 3190.0], [86.2, 3192.0], [86.3, 3217.0], [86.4, 3229.0], [86.5, 3245.0], [86.6, 3255.0], [86.7, 3262.0], [86.8, 3283.0], [86.9, 3291.0], [87.0, 3307.0], [87.1, 3320.0], [87.2, 3323.0], [87.3, 3334.0], [87.4, 3343.0], [87.5, 3344.0], [87.6, 3359.0], [87.7, 3361.0], [87.8, 3366.0], [87.9, 3376.0], [88.0, 3376.0], [88.1, 3404.0], [88.2, 3404.0], [88.3, 3411.0], [88.4, 3426.0], [88.5, 3449.0], [88.6, 3474.0], [88.7, 3485.0], [88.8, 3494.0], [88.9, 3499.0], [89.0, 3501.0], [89.1, 3510.0], [89.2, 3544.0], [89.3, 3548.0], [89.4, 3573.0], [89.5, 3578.0], [89.6, 3597.0], [89.7, 3606.0], [89.8, 3608.0], [89.9, 3629.0], [90.0, 3629.0], [90.1, 3646.0], [90.2, 3657.0], [90.3, 3660.0], [90.4, 3664.0], [90.5, 3669.0], [90.6, 3688.0], [90.7, 3699.0], [90.8, 3714.0], [90.9, 3719.0], [91.0, 3724.0], [91.1, 3727.0], [91.2, 3731.0], [91.3, 3733.0], [91.4, 3740.0], [91.5, 3749.0], [91.6, 3751.0], [91.7, 3755.0], [91.8, 3758.0], [91.9, 3785.0], [92.0, 3792.0], [92.1, 3793.0], [92.2, 3831.0], [92.3, 3847.0], [92.4, 3858.0], [92.5, 3870.0], [92.6, 3871.0], [92.7, 3889.0], [92.8, 3907.0], [92.9, 3908.0], [93.0, 3917.0], [93.1, 3931.0], [93.2, 3952.0], [93.3, 3959.0], [93.4, 3963.0], [93.5, 3966.0], [93.6, 3970.0], [93.7, 3977.0], [93.8, 3992.0], [93.9, 3993.0], [94.0, 4002.0], [94.1, 4003.0], [94.2, 4008.0], [94.3, 4023.0], [94.4, 4026.0], [94.5, 4031.0], [94.6, 4043.0], [94.7, 4044.0], [94.8, 4056.0], [94.9, 4058.0], [95.0, 4061.0], [95.1, 4070.0], [95.2, 4078.0], [95.3, 4089.0], [95.4, 4092.0], [95.5, 4095.0], [95.6, 4102.0], [95.7, 4103.0], [95.8, 4104.0], [95.9, 4107.0], [96.0, 4127.0], [96.1, 4145.0], [96.2, 4184.0], [96.3, 4223.0], [96.4, 4229.0], [96.5, 4234.0], [96.6, 4279.0], [96.7, 4286.0], [96.8, 4368.0], [96.9, 4380.0], [97.0, 4405.0], [97.1, 4423.0], [97.2, 4436.0], [97.3, 4489.0], [97.4, 4536.0], [97.5, 4585.0], [97.6, 4589.0], [97.7, 4598.0], [97.8, 4620.0], [97.9, 4713.0], [98.0, 4725.0], [98.1, 4750.0], [98.2, 4823.0], [98.3, 4834.0], [98.4, 4882.0], [98.5, 4930.0], [98.6, 5115.0], [98.7, 5149.0], [98.8, 5268.0], [98.9, 5331.0], [99.0, 5337.0], [99.1, 5518.0], [99.2, 5673.0], [99.3, 5680.0], [99.4, 5796.0], [99.5, 5887.0], [99.6, 6059.0], [99.7, 6084.0], [99.8, 6146.0], [99.9, 6212.0]], "isOverall": false, "label": "insideairbnb docker home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 950.0, "series": [{"data": [[0.0, 950.0], [600.0, 9.0], [700.0, 10.0], [800.0, 11.0], [900.0, 16.0], [1000.0, 14.0], [1100.0, 9.0], [1200.0, 10.0], [1300.0, 12.0], [1400.0, 11.0], [1500.0, 8.0], [1600.0, 10.0], [1700.0, 12.0], [1800.0, 9.0], [1900.0, 8.0], [2000.0, 9.0], [2100.0, 6.0], [2200.0, 9.0], [2300.0, 1.0], [2400.0, 5.0], [2500.0, 4.0], [2600.0, 4.0], [2700.0, 4.0], [2800.0, 5.0], [2900.0, 5.0], [3000.0, 5.0], [3100.0, 14.0], [3300.0, 19.0], [3200.0, 11.0], [3400.0, 14.0], [3500.0, 11.0], [3600.0, 18.0], [3700.0, 22.0], [3800.0, 10.0], [3900.0, 20.0], [4000.0, 26.0], [4100.0, 10.0], [4200.0, 8.0], [4300.0, 4.0], [4500.0, 6.0], [4400.0, 6.0], [4600.0, 2.0], [4700.0, 5.0], [4800.0, 5.0], [5100.0, 3.0], [4900.0, 1.0], [5000.0, 1.0], [5300.0, 3.0], [5200.0, 1.0], [5600.0, 3.0], [5500.0, 1.0], [5400.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [6000.0, 4.0], [6100.0, 2.0], [6200.0, 1.0], [6800.0, 1.0], [100.0, 102.0], [200.0, 44.0], [300.0, 30.0], [400.0, 27.0], [500.0, 16.0]], "isOverall": false, "label": "insideairbnb docker home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 118.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 1153.0, "series": [{"data": [[0.0, 1153.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 118.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 340.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.654507014E12, "maxY": 1.0, "series": [{"data": [[1.6545070305E12, 1.0], [1.6545070335E12, 1.0], [1.6545070365E12, 1.0], [1.654507014E12, 1.0], [1.6545070395E12, 1.0], [1.654507017E12, 1.0], [1.6545070425E12, 1.0], [1.65450702E12, 1.0], [1.654507023E12, 1.0], [1.654507026E12, 1.0], [1.6545070455E12, 1.0], [1.654507029E12, 1.0], [1.6545070485E12, 1.0], [1.654507032E12, 1.0], [1.6545070515E12, 1.0], [1.6545070155E12, 1.0], [1.654507035E12, 1.0], [1.6545070185E12, 1.0], [1.654507038E12, 1.0], [1.654507041E12, 1.0], [1.654507044E12, 1.0], [1.6545070215E12, 1.0], [1.654507047E12, 1.0], [1.6545070245E12, 1.0], [1.65450705E12, 1.0], [1.6545070275E12, 1.0]], "isOverall": false, "label": "parallel bzm - Parallel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 46.40366972477062, "minX": 1.0, "maxY": 6079.0, "series": [{"data": [[2.0, 46.40366972477062], [3.0, 65.66874999999997], [4.0, 85.59821428571428], [5.0, 65.51898734177213], [6.0, 80.33333333333333], [7.0, 381.44117647058823], [8.0, 277.2727272727273], [9.0, 303.95454545454544], [10.0, 269.7407407407407], [11.0, 257.53846153846155], [12.0, 352.25], [13.0, 526.6666666666667], [14.0, 1151.3333333333335], [15.0, 1033.25], [16.0, 3080.0], [17.0, 3209.0], [18.0, 1066.0], [19.0, 288.6], [20.0, 697.8], [21.0, 1025.75], [22.0, 1321.3333333333333], [23.0, 1596.6666666666667], [24.0, 1210.3333333333335], [25.0, 2051.0], [26.0, 1917.0], [27.0, 3544.0], [28.0, 3597.0], [29.0, 330.0], [30.0, 1428.3333333333335], [31.0, 1724.2], [32.0, 685.7777777777778], [33.0, 369.4], [34.0, 1262.5], [35.0, 425.6666666666667], [36.0, 443.8333333333333], [37.0, 1427.0], [38.0, 505.5], [39.0, 3448.3333333333335], [40.0, 3426.0], [43.0, 3530.0], [42.0, 3129.5], [45.0, 1391.3333333333335], [44.0, 3573.0], [46.0, 3343.0], [49.0, 3499.0], [48.0, 3546.0], [50.0, 3229.0], [52.0, 757.0], [53.0, 3327.6666666666665], [55.0, 768.5], [54.0, 1867.5], [57.0, 1463.6], [56.0, 2048.0], [59.0, 3523.5], [58.0, 1999.5], [61.0, 908.0588235294119], [60.0, 1633.5], [62.0, 717.375], [63.0, 1235.0], [67.0, 1493.5], [66.0, 1704.0], [65.0, 1845.25], [64.0, 2472.5], [68.0, 1291.3333333333335], [69.0, 2008.0], [70.0, 1947.75], [71.0, 3411.0], [74.0, 240.0], [75.0, 4087.25], [78.0, 1718.3333333333333], [77.0, 2059.333333333333], [79.0, 1851.0], [76.0, 2048.5], [82.0, 909.5], [80.0, 3589.0], [83.0, 3148.5], [85.0, 2914.0], [84.0, 1257.0], [87.0, 3793.0], [86.0, 5796.0], [91.0, 3751.0], [90.0, 4095.0], [89.0, 4328.0], [88.0, 3984.0], [94.0, 2772.5], [95.0, 4003.0], [93.0, 3366.0], [92.0, 3334.0], [99.0, 4008.0], [98.0, 3578.0], [97.0, 3970.0], [96.0, 3669.0], [103.0, 4078.0], [102.0, 4058.0], [101.0, 4033.0], [100.0, 4234.0], [106.0, 4070.0], [105.0, 3390.0], [111.0, 3111.0], [110.0, 3786.0], [109.0, 3629.0], [108.0, 3610.0], [115.0, 4099.0], [114.0, 5666.0], [113.0, 3567.0], [119.0, 2119.875], [118.0, 2168.1666666666665], [117.0, 1665.25], [116.0, 3723.0], [120.0, 2512.8], [122.0, 1853.625], [121.0, 1865.75], [123.0, 1839.2857142857142], [126.0, 2141.0], [124.0, 2050.0], [125.0, 1317.6], [127.0, 3485.0], [135.0, 938.0], [134.0, 4436.0], [133.0, 4792.0], [131.0, 4061.0], [130.0, 3977.0], [129.0, 6079.0], [128.0, 4080.0], [136.0, 2999.0], [141.0, 2338.5], [140.0, 2920.3333333333335], [143.0, 4258.0], [142.0, 3733.0], [138.0, 3255.0], [137.0, 3376.0], [148.0, 3275.0], [147.0, 1774.6666666666665], [150.0, 4062.0], [149.0, 4044.0], [145.0, 3183.0], [144.0, 5518.0], [157.0, 2027.75], [156.0, 3358.6666666666665], [154.0, 2309.0], [159.0, 3907.0], [158.0, 3952.0], [153.0, 3996.0], [152.0, 4674.0], [166.0, 1503.0], [165.0, 3870.0], [164.0, 3645.5], [162.0, 3629.0], [161.0, 3232.0], [160.0, 3731.0], [172.0, 2833.6666666666665], [171.0, 2521.75], [174.0, 1233.0], [173.0, 2847.5], [175.0, 3012.0], [169.0, 3965.0], [170.0, 3871.0], [179.0, 1443.0], [178.0, 3289.5], [177.0, 1170.5], [176.0, 2312.25], [183.0, 2455.0], [182.0, 1376.0], [181.0, 3615.3333333333335], [180.0, 4405.0], [191.0, 4059.0], [190.0, 4026.0], [189.0, 3958.0], [188.0, 4056.0], [187.0, 1409.0], [186.0, 4226.0], [185.0, 1642.0], [198.0, 2152.0], [196.0, 1681.0], [195.0, 2827.0], [193.0, 3291.25], [192.0, 3307.0], [199.0, 2948.6666666666665], [197.0, 3959.0], [201.0, 3344.0], [204.0, 3145.75], [207.0, 1887.6666666666667], [205.0, 2378.5], [203.0, 2516.75], [202.0, 2950.0], [206.0, 3992.0], [200.0, 2072.0], [212.0, 2597.0], [211.0, 1782.2857142857144], [208.0, 1850.0], [215.0, 2976.0], [214.0, 1105.0], [213.0, 1737.0], [210.0, 3608.0], [216.0, 3135.0], [221.0, 4589.0], [220.0, 4074.0], [219.0, 4223.0], [217.0, 4973.4], [229.0, 2583.0], [228.0, 2236.0], [227.0, 3927.0], [224.0, 3166.6666666666665], [238.0, 915.0], [239.0, 4680.75], [235.0, 4318.0], [234.0, 4224.333333333333], [247.0, 4090.5], [246.0, 1994.0], [245.0, 3726.0], [242.0, 2118.5], [240.0, 2053.0], [250.0, 1119.0], [249.0, 2980.6666666666665], [255.0, 4750.0], [254.0, 4060.0], [253.0, 4512.0], [252.0, 2153.0], [251.0, 4328.0], [248.0, 4536.0], [261.0, 1638.0], [260.0, 3966.0], [259.0, 4103.0], [258.0, 2025.0], [257.0, 4380.0], [256.0, 5115.0], [1.0, 49.83957219251336]], "isOverall": false, "label": "insideairbnb docker home", "isController": false}, {"data": [[42.14711359404097, 855.5431409062694]], "isOverall": false, "label": "insideairbnb docker home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 261.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 936.0, "minX": 1.654507014E12, "maxY": 697513.3333333334, "series": [{"data": [[1.6545070305E12, 364986.6666666667], [1.6545070335E12, 413106.6666666667], [1.6545070365E12, 488253.3333333333], [1.654507014E12, 64416.666666666664], [1.6545070395E12, 504196.6666666667], [1.654507017E12, 118100.0], [1.6545070425E12, 423800.0], [1.65450702E12, 177083.33333333334], [1.654507023E12, 241493.33333333334], [1.654507026E12, 300400.0], [1.6545070455E12, 332693.3333333333], [1.654507029E12, 364750.0], [1.6545070485E12, 370306.6666666667], [1.654507032E12, 423923.3333333333], [1.6545070515E12, 359480.0], [1.6545070155E12, 64433.333333333336], [1.654507035E12, 488256.6666666667], [1.6545070185E12, 128793.33333333333], [1.654507038E12, 541696.6666666666], [1.654507041E12, 472090.0], [1.654507044E12, 305856.6666666667], [1.6545070215E12, 187823.33333333334], [1.654507047E12, 262863.3333333333], [1.6545070245E12, 241433.33333333334], [1.65450705E12, 697513.3333333334], [1.6545070275E12, 305750.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6545070305E12, 5304.0], [1.6545070335E12, 6006.0], [1.6545070365E12, 7098.0], [1.654507014E12, 936.0], [1.6545070395E12, 7332.0], [1.654507017E12, 1716.0], [1.6545070425E12, 6162.0], [1.65450702E12, 2574.0], [1.654507023E12, 3510.0], [1.654507026E12, 4368.0], [1.6545070455E12, 4836.0], [1.654507029E12, 5304.0], [1.6545070485E12, 5382.0], [1.654507032E12, 6162.0], [1.6545070515E12, 5226.0], [1.6545070155E12, 936.0], [1.654507035E12, 7098.0], [1.6545070185E12, 1872.0], [1.654507038E12, 7878.0], [1.654507041E12, 6864.0], [1.654507044E12, 4446.0], [1.6545070215E12, 2730.0], [1.654507047E12, 3822.0], [1.6545070245E12, 3510.0], [1.65450705E12, 10140.0], [1.6545070275E12, 4446.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 31.40909090909091, "minX": 1.654507014E12, "maxY": 3878.984615384616, "series": [{"data": [[1.6545070305E12, 36.77941176470589], [1.6545070335E12, 41.15584415584416], [1.6545070365E12, 49.703296703296694], [1.654507014E12, 60.33333333333333], [1.6545070395E12, 84.47872340425529], [1.654507017E12, 31.40909090909091], [1.6545070425E12, 578.4303797468355], [1.65450702E12, 32.18181818181819], [1.654507023E12, 32.2888888888889], [1.654507026E12, 35.517857142857146], [1.6545070455E12, 1553.5483870967741], [1.654507029E12, 37.44117647058824], [1.6545070485E12, 3541.2173913043493], [1.654507032E12, 40.64556962025314], [1.6545070515E12, 3607.0298507462685], [1.6545070155E12, 43.666666666666664], [1.654507035E12, 126.05494505494507], [1.6545070185E12, 32.124999999999986], [1.654507038E12, 64.73267326732673], [1.654507041E12, 196.94318181818184], [1.654507044E12, 1128.140350877193], [1.6545070215E12, 31.428571428571423], [1.654507047E12, 2260.204081632654], [1.6545070245E12, 32.53333333333334], [1.65450705E12, 3878.984615384616], [1.6545070275E12, 33.64912280701755]], "isOverall": false, "label": "insideairbnb docker home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 31.257142857142856, "minX": 1.654507014E12, "maxY": 3877.7, "series": [{"data": [[1.6545070305E12, 36.55882352941177], [1.6545070335E12, 40.96103896103896], [1.6545070365E12, 49.5164835164835], [1.654507014E12, 60.16666666666667], [1.6545070395E12, 84.031914893617], [1.654507017E12, 31.27272727272727], [1.6545070425E12, 576.9240506329113], [1.65450702E12, 31.939393939393938], [1.654507023E12, 31.888888888888882], [1.654507026E12, 35.357142857142854], [1.6545070455E12, 1551.4677419354844], [1.654507029E12, 37.279411764705884], [1.6545070485E12, 3540.420289855072], [1.654507032E12, 40.49367088607596], [1.6545070515E12, 3606.402985074627], [1.6545070155E12, 43.416666666666664], [1.654507035E12, 125.63736263736268], [1.6545070185E12, 31.916666666666664], [1.654507038E12, 64.56435643564359], [1.654507041E12, 196.18181818181822], [1.654507044E12, 1126.8421052631584], [1.6545070215E12, 31.257142857142856], [1.654507047E12, 2259.163265306122], [1.6545070245E12, 32.31111111111111], [1.65450705E12, 3877.7], [1.6545070275E12, 33.47368421052633]], "isOverall": false, "label": "insideairbnb docker home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4.589285714285716, "minX": 1.654507014E12, "maxY": 771.3432835820896, "series": [{"data": [[1.6545070305E12, 5.882352941176472], [1.6545070335E12, 5.9610389610389625], [1.6545070365E12, 6.252747252747253], [1.654507014E12, 10.166666666666668], [1.6545070395E12, 8.202127659574465], [1.654507017E12, 5.7727272727272725], [1.6545070425E12, 47.468354430379726], [1.65450702E12, 5.636363636363635], [1.654507023E12, 5.444444444444444], [1.654507026E12, 4.589285714285716], [1.6545070455E12, 131.6451612903226], [1.654507029E12, 5.249999999999999], [1.6545070485E12, 174.2898550724637], [1.654507032E12, 5.734177215189872], [1.6545070515E12, 771.3432835820896], [1.6545070155E12, 8.499999999999998], [1.654507035E12, 12.043956043956042], [1.6545070185E12, 5.625], [1.654507038E12, 8.039603960396038], [1.654507041E12, 14.897727272727273], [1.654507044E12, 51.03508771929825], [1.6545070215E12, 5.342857142857143], [1.654507047E12, 170.02040816326533], [1.6545070245E12, 5.6], [1.65450705E12, 238.6692307692308], [1.6545070275E12, 5.403508771929823]], "isOverall": false, "label": "insideairbnb docker home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 28.0, "minX": 1.654507014E12, "maxY": 6801.0, "series": [{"data": [[1.6545070305E12, 56.0], [1.6545070335E12, 64.0], [1.6545070365E12, 88.0], [1.654507014E12, 224.0], [1.6545070395E12, 208.0], [1.654507017E12, 35.0], [1.6545070425E12, 1250.0], [1.65450702E12, 45.0], [1.654507023E12, 48.0], [1.654507026E12, 52.0], [1.6545070455E12, 2722.0], [1.654507029E12, 64.0], [1.6545070485E12, 6801.0], [1.654507032E12, 71.0], [1.6545070515E12, 6161.0], [1.6545070155E12, 58.0], [1.654507035E12, 305.0], [1.6545070185E12, 46.0], [1.654507038E12, 134.0], [1.654507041E12, 677.0], [1.654507044E12, 2283.0], [1.6545070215E12, 41.0], [1.654507047E12, 4286.0], [1.6545070245E12, 43.0], [1.65450705E12, 6146.0], [1.6545070275E12, 46.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6545070305E12, 42.0], [1.6545070335E12, 51.2], [1.6545070365E12, 69.39999999999999], [1.654507014E12, 182.90000000000015], [1.6545070395E12, 141.0], [1.654507017E12, 34.0], [1.6545070425E12, 1014.0], [1.65450702E12, 37.0], [1.654507023E12, 39.8], [1.654507026E12, 42.0], [1.6545070455E12, 2559.1], [1.654507029E12, 43.400000000000006], [1.6545070485E12, 5149.0], [1.654507032E12, 50.0], [1.6545070515E12, 4044.6], [1.6545070155E12, 57.400000000000006], [1.654507035E12, 220.8], [1.6545070185E12, 41.0], [1.654507038E12, 92.19999999999999], [1.654507041E12, 377.6], [1.654507044E12, 1884.0], [1.6545070215E12, 34.4], [1.654507047E12, 3504.0], [1.6545070245E12, 37.0], [1.65450705E12, 4866.600000000001], [1.6545070275E12, 41.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6545070305E12, 56.0], [1.6545070335E12, 64.0], [1.6545070365E12, 88.0], [1.654507014E12, 224.0], [1.6545070395E12, 208.0], [1.654507017E12, 35.0], [1.6545070425E12, 1250.0], [1.65450702E12, 45.0], [1.654507023E12, 48.0], [1.654507026E12, 52.0], [1.6545070455E12, 2722.0], [1.654507029E12, 64.0], [1.6545070485E12, 6801.0], [1.654507032E12, 71.0], [1.6545070515E12, 6161.0], [1.6545070155E12, 58.0], [1.654507035E12, 305.0], [1.6545070185E12, 46.0], [1.654507038E12, 133.76000000000005], [1.654507041E12, 677.0], [1.654507044E12, 2283.0], [1.6545070215E12, 41.0], [1.654507047E12, 4286.0], [1.6545070245E12, 43.0], [1.65450705E12, 6126.78], [1.6545070275E12, 46.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6545070305E12, 46.55], [1.6545070335E12, 54.19999999999999], [1.6545070365E12, 81.39999999999999], [1.654507014E12, 224.0], [1.6545070395E12, 167.75], [1.654507017E12, 34.849999999999994], [1.6545070425E12, 1095.0], [1.65450702E12, 40.09999999999998], [1.654507023E12, 41.699999999999996], [1.654507026E12, 43.89999999999999], [1.6545070455E12, 2639.7], [1.654507029E12, 53.55], [1.6545070485E12, 5505.0], [1.654507032E12, 57.0], [1.6545070515E12, 5461.399999999994], [1.6545070155E12, 58.0], [1.654507035E12, 265.1999999999998], [1.6545070185E12, 44.75], [1.654507038E12, 100.79999999999998], [1.654507041E12, 441.84999999999997], [1.654507044E12, 2097.9], [1.6545070215E12, 37.79999999999998], [1.654507047E12, 3902.0], [1.6545070245E12, 41.0], [1.65450705E12, 5700.249999999999], [1.6545070275E12, 44.19999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6545070305E12, 31.0], [1.6545070335E12, 31.0], [1.6545070365E12, 31.0], [1.654507014E12, 37.0], [1.6545070395E12, 39.0], [1.654507017E12, 30.0], [1.6545070425E12, 161.0], [1.65450702E12, 28.0], [1.654507023E12, 28.0], [1.654507026E12, 28.0], [1.6545070455E12, 292.0], [1.654507029E12, 30.0], [1.6545070485E12, 915.0], [1.654507032E12, 29.0], [1.6545070515E12, 2875.0], [1.6545070155E12, 35.0], [1.654507035E12, 34.0], [1.6545070185E12, 29.0], [1.654507038E12, 36.0], [1.654507041E12, 60.0], [1.654507044E12, 223.0], [1.6545070215E12, 28.0], [1.654507047E12, 728.0], [1.6545070245E12, 28.0], [1.65450705E12, 1215.0], [1.6545070275E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6545070305E12, 36.5], [1.6545070335E12, 39.0], [1.6545070365E12, 46.0], [1.654507014E12, 42.0], [1.6545070395E12, 70.0], [1.654507017E12, 31.0], [1.6545070425E12, 502.0], [1.65450702E12, 31.0], [1.654507023E12, 31.0], [1.654507026E12, 35.0], [1.6545070455E12, 1545.5], [1.654507029E12, 36.5], [1.6545070485E12, 4089.0], [1.654507032E12, 39.0], [1.6545070515E12, 3494.0], [1.6545070155E12, 42.0], [1.654507035E12, 106.0], [1.6545070185E12, 31.0], [1.654507038E12, 61.0], [1.654507041E12, 147.5], [1.654507044E12, 1192.0], [1.6545070215E12, 31.0], [1.654507047E12, 1995.0], [1.6545070245E12, 31.0], [1.65450705E12, 3906.5], [1.6545070275E12, 32.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 31.0, "minX": 7.0, "maxY": 4102.5, "series": [{"data": [[35.0, 648.0], [37.0, 35.0], [38.0, 33.0], [40.0, 2252.0], [45.0, 36.0], [46.0, 37.0], [48.0, 747.0], [51.0, 51.5], [52.0, 108.5], [53.0, 40.0], [59.0, 1625.0], [61.0, 68.0], [62.0, 42.5], [66.0, 75.5], [67.0, 118.0], [64.0, 4102.5], [69.0, 79.0], [68.0, 60.0], [84.0, 3500.0], [7.0, 43.0], [113.0, 3917.0], [8.0, 42.0], [9.0, 41.0], [14.0, 1561.0], [15.0, 31.0], [16.0, 31.0], [22.0, 31.0], [23.0, 31.0], [25.0, 1443.0], [30.0, 31.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 113.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 30.0, "minX": 7.0, "maxY": 4095.5, "series": [{"data": [[35.0, 648.0], [37.0, 34.0], [38.0, 33.0], [40.0, 2252.0], [45.0, 36.0], [46.0, 36.0], [48.0, 747.0], [51.0, 51.5], [52.0, 108.0], [53.0, 39.0], [59.0, 1624.0], [61.0, 68.0], [62.0, 42.5], [66.0, 75.0], [67.0, 118.0], [64.0, 4095.5], [69.0, 78.0], [68.0, 60.0], [84.0, 3500.0], [7.0, 43.0], [113.0, 3915.0], [8.0, 42.0], [9.0, 40.0], [14.0, 1561.0], [15.0, 31.0], [16.0, 30.0], [22.0, 31.0], [23.0, 31.0], [25.0, 1443.0], [30.0, 31.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 113.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.6545070125E12, "maxY": 75.33333333333333, "series": [{"data": [[1.6545070305E12, 46.0], [1.6545070335E12, 53.333333333333336], [1.6545070365E12, 60.666666666666664], [1.654507014E12, 8.0], [1.6545070395E12, 67.33333333333333], [1.654507017E12, 15.333333333333334], [1.6545070425E12, 74.66666666666667], [1.65450702E12, 22.666666666666668], [1.654507023E12, 30.0], [1.654507026E12, 38.0], [1.6545070455E12, 74.66666666666667], [1.654507029E12, 44.666666666666664], [1.6545070485E12, 18.666666666666668], [1.654507032E12, 52.0], [1.6545070125E12, 0.6666666666666666], [1.6545070155E12, 7.333333333333333], [1.654507035E12, 60.0], [1.6545070185E12, 15.333333333333334], [1.654507038E12, 67.33333333333333], [1.654507041E12, 75.33333333333333], [1.654507044E12, 75.33333333333333], [1.6545070215E12, 23.333333333333332], [1.654507047E12, 75.33333333333333], [1.6545070245E12, 30.0], [1.6545070275E12, 38.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6545070485E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.654507014E12, "maxY": 86.66666666666667, "series": [{"data": [[1.6545070305E12, 45.333333333333336], [1.6545070335E12, 51.333333333333336], [1.6545070365E12, 60.666666666666664], [1.654507014E12, 8.0], [1.6545070395E12, 62.666666666666664], [1.654507017E12, 14.666666666666666], [1.6545070425E12, 52.666666666666664], [1.65450702E12, 22.0], [1.654507023E12, 30.0], [1.654507026E12, 37.333333333333336], [1.6545070455E12, 41.333333333333336], [1.654507029E12, 45.333333333333336], [1.6545070485E12, 46.0], [1.654507032E12, 52.666666666666664], [1.6545070515E12, 44.666666666666664], [1.6545070155E12, 8.0], [1.654507035E12, 60.666666666666664], [1.6545070185E12, 16.0], [1.654507038E12, 67.33333333333333], [1.654507041E12, 58.666666666666664], [1.654507044E12, 38.0], [1.6545070215E12, 23.333333333333332], [1.654507047E12, 32.666666666666664], [1.6545070245E12, 30.0], [1.65450705E12, 86.66666666666667], [1.6545070275E12, 38.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.654507014E12, "maxY": 86.66666666666667, "series": [{"data": [[1.6545070305E12, 45.333333333333336], [1.6545070335E12, 51.333333333333336], [1.6545070365E12, 60.666666666666664], [1.654507014E12, 8.0], [1.6545070395E12, 62.666666666666664], [1.654507017E12, 14.666666666666666], [1.6545070425E12, 52.666666666666664], [1.65450702E12, 22.0], [1.654507023E12, 30.0], [1.654507026E12, 37.333333333333336], [1.6545070455E12, 41.333333333333336], [1.654507029E12, 45.333333333333336], [1.6545070485E12, 46.0], [1.654507032E12, 52.666666666666664], [1.6545070515E12, 44.666666666666664], [1.6545070155E12, 8.0], [1.654507035E12, 60.666666666666664], [1.6545070185E12, 16.0], [1.654507038E12, 67.33333333333333], [1.654507041E12, 58.666666666666664], [1.654507044E12, 38.0], [1.6545070215E12, 23.333333333333332], [1.654507047E12, 32.666666666666664], [1.6545070245E12, 30.0], [1.65450705E12, 86.66666666666667], [1.6545070275E12, 38.0]], "isOverall": false, "label": "insideairbnb docker home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.654507014E12, "maxY": 86.66666666666667, "series": [{"data": [[1.6545070305E12, 45.333333333333336], [1.6545070335E12, 51.333333333333336], [1.6545070365E12, 60.666666666666664], [1.654507014E12, 8.0], [1.6545070395E12, 62.666666666666664], [1.654507017E12, 14.666666666666666], [1.6545070425E12, 52.666666666666664], [1.65450702E12, 22.0], [1.654507023E12, 30.0], [1.654507026E12, 37.333333333333336], [1.6545070455E12, 41.333333333333336], [1.654507029E12, 45.333333333333336], [1.6545070485E12, 46.0], [1.654507032E12, 52.666666666666664], [1.6545070515E12, 44.666666666666664], [1.6545070155E12, 8.0], [1.654507035E12, 60.666666666666664], [1.6545070185E12, 16.0], [1.654507038E12, 67.33333333333333], [1.654507041E12, 58.666666666666664], [1.654507044E12, 38.0], [1.6545070215E12, 23.333333333333332], [1.654507047E12, 32.666666666666664], [1.6545070245E12, 30.0], [1.65450705E12, 86.66666666666667], [1.6545070275E12, 38.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6545070515E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

