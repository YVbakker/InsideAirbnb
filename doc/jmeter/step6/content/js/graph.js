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
        data: {"result": {"minY": 16.0, "minX": 0.0, "maxY": 3960.0, "series": [{"data": [[0.0, 16.0], [0.1, 16.0], [0.2, 16.0], [0.3, 16.0], [0.4, 16.0], [0.5, 17.0], [0.6, 17.0], [0.7, 17.0], [0.8, 17.0], [0.9, 17.0], [1.0, 17.0], [1.1, 17.0], [1.2, 17.0], [1.3, 17.0], [1.4, 17.0], [1.5, 17.0], [1.6, 17.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 17.0], [2.1, 17.0], [2.2, 17.0], [2.3, 17.0], [2.4, 17.0], [2.5, 17.0], [2.6, 18.0], [2.7, 18.0], [2.8, 18.0], [2.9, 18.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 18.0], [3.4, 18.0], [3.5, 18.0], [3.6, 18.0], [3.7, 18.0], [3.8, 18.0], [3.9, 18.0], [4.0, 18.0], [4.1, 18.0], [4.2, 18.0], [4.3, 18.0], [4.4, 18.0], [4.5, 18.0], [4.6, 18.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 18.0], [5.1, 18.0], [5.2, 18.0], [5.3, 18.0], [5.4, 18.0], [5.5, 18.0], [5.6, 18.0], [5.7, 18.0], [5.8, 18.0], [5.9, 18.0], [6.0, 18.0], [6.1, 18.0], [6.2, 18.0], [6.3, 18.0], [6.4, 18.0], [6.5, 18.0], [6.6, 18.0], [6.7, 18.0], [6.8, 18.0], [6.9, 19.0], [7.0, 19.0], [7.1, 19.0], [7.2, 19.0], [7.3, 19.0], [7.4, 19.0], [7.5, 19.0], [7.6, 19.0], [7.7, 19.0], [7.8, 19.0], [7.9, 19.0], [8.0, 19.0], [8.1, 19.0], [8.2, 19.0], [8.3, 19.0], [8.4, 19.0], [8.5, 19.0], [8.6, 19.0], [8.7, 19.0], [8.8, 19.0], [8.9, 19.0], [9.0, 19.0], [9.1, 19.0], [9.2, 19.0], [9.3, 19.0], [9.4, 19.0], [9.5, 19.0], [9.6, 19.0], [9.7, 19.0], [9.8, 19.0], [9.9, 19.0], [10.0, 19.0], [10.1, 19.0], [10.2, 19.0], [10.3, 19.0], [10.4, 19.0], [10.5, 19.0], [10.6, 19.0], [10.7, 19.0], [10.8, 19.0], [10.9, 19.0], [11.0, 19.0], [11.1, 19.0], [11.2, 19.0], [11.3, 19.0], [11.4, 19.0], [11.5, 19.0], [11.6, 19.0], [11.7, 19.0], [11.8, 19.0], [11.9, 19.0], [12.0, 19.0], [12.1, 19.0], [12.2, 19.0], [12.3, 20.0], [12.4, 20.0], [12.5, 20.0], [12.6, 20.0], [12.7, 20.0], [12.8, 20.0], [12.9, 20.0], [13.0, 20.0], [13.1, 20.0], [13.2, 20.0], [13.3, 20.0], [13.4, 20.0], [13.5, 20.0], [13.6, 20.0], [13.7, 20.0], [13.8, 20.0], [13.9, 20.0], [14.0, 20.0], [14.1, 20.0], [14.2, 20.0], [14.3, 20.0], [14.4, 20.0], [14.5, 20.0], [14.6, 20.0], [14.7, 20.0], [14.8, 20.0], [14.9, 20.0], [15.0, 20.0], [15.1, 20.0], [15.2, 20.0], [15.3, 20.0], [15.4, 20.0], [15.5, 20.0], [15.6, 20.0], [15.7, 20.0], [15.8, 20.0], [15.9, 20.0], [16.0, 20.0], [16.1, 20.0], [16.2, 20.0], [16.3, 20.0], [16.4, 20.0], [16.5, 20.0], [16.6, 20.0], [16.7, 20.0], [16.8, 20.0], [16.9, 20.0], [17.0, 20.0], [17.1, 20.0], [17.2, 20.0], [17.3, 20.0], [17.4, 20.0], [17.5, 21.0], [17.6, 21.0], [17.7, 21.0], [17.8, 21.0], [17.9, 21.0], [18.0, 21.0], [18.1, 21.0], [18.2, 21.0], [18.3, 21.0], [18.4, 21.0], [18.5, 21.0], [18.6, 21.0], [18.7, 21.0], [18.8, 21.0], [18.9, 21.0], [19.0, 21.0], [19.1, 21.0], [19.2, 21.0], [19.3, 21.0], [19.4, 21.0], [19.5, 21.0], [19.6, 21.0], [19.7, 21.0], [19.8, 21.0], [19.9, 21.0], [20.0, 21.0], [20.1, 21.0], [20.2, 21.0], [20.3, 21.0], [20.4, 21.0], [20.5, 21.0], [20.6, 21.0], [20.7, 21.0], [20.8, 21.0], [20.9, 21.0], [21.0, 21.0], [21.1, 21.0], [21.2, 21.0], [21.3, 22.0], [21.4, 22.0], [21.5, 22.0], [21.6, 22.0], [21.7, 22.0], [21.8, 22.0], [21.9, 22.0], [22.0, 22.0], [22.1, 22.0], [22.2, 22.0], [22.3, 22.0], [22.4, 22.0], [22.5, 22.0], [22.6, 22.0], [22.7, 22.0], [22.8, 22.0], [22.9, 22.0], [23.0, 22.0], [23.1, 22.0], [23.2, 22.0], [23.3, 22.0], [23.4, 22.0], [23.5, 22.0], [23.6, 22.0], [23.7, 23.0], [23.8, 23.0], [23.9, 23.0], [24.0, 23.0], [24.1, 23.0], [24.2, 23.0], [24.3, 23.0], [24.4, 23.0], [24.5, 23.0], [24.6, 23.0], [24.7, 23.0], [24.8, 23.0], [24.9, 23.0], [25.0, 23.0], [25.1, 23.0], [25.2, 23.0], [25.3, 23.0], [25.4, 23.0], [25.5, 23.0], [25.6, 23.0], [25.7, 23.0], [25.8, 23.0], [25.9, 23.0], [26.0, 23.0], [26.1, 24.0], [26.2, 24.0], [26.3, 24.0], [26.4, 24.0], [26.5, 24.0], [26.6, 24.0], [26.7, 24.0], [26.8, 24.0], [26.9, 24.0], [27.0, 24.0], [27.1, 24.0], [27.2, 24.0], [27.3, 24.0], [27.4, 24.0], [27.5, 24.0], [27.6, 24.0], [27.7, 24.0], [27.8, 24.0], [27.9, 24.0], [28.0, 24.0], [28.1, 24.0], [28.2, 25.0], [28.3, 25.0], [28.4, 25.0], [28.5, 25.0], [28.6, 25.0], [28.7, 25.0], [28.8, 25.0], [28.9, 25.0], [29.0, 25.0], [29.1, 25.0], [29.2, 25.0], [29.3, 25.0], [29.4, 25.0], [29.5, 25.0], [29.6, 25.0], [29.7, 25.0], [29.8, 25.0], [29.9, 25.0], [30.0, 25.0], [30.1, 25.0], [30.2, 26.0], [30.3, 26.0], [30.4, 26.0], [30.5, 26.0], [30.6, 26.0], [30.7, 26.0], [30.8, 26.0], [30.9, 26.0], [31.0, 26.0], [31.1, 26.0], [31.2, 26.0], [31.3, 26.0], [31.4, 26.0], [31.5, 26.0], [31.6, 26.0], [31.7, 26.0], [31.8, 26.0], [31.9, 26.0], [32.0, 27.0], [32.1, 27.0], [32.2, 27.0], [32.3, 27.0], [32.4, 27.0], [32.5, 27.0], [32.6, 27.0], [32.7, 27.0], [32.8, 27.0], [32.9, 27.0], [33.0, 27.0], [33.1, 27.0], [33.2, 27.0], [33.3, 27.0], [33.4, 28.0], [33.5, 28.0], [33.6, 28.0], [33.7, 28.0], [33.8, 28.0], [33.9, 28.0], [34.0, 28.0], [34.1, 28.0], [34.2, 28.0], [34.3, 28.0], [34.4, 28.0], [34.5, 28.0], [34.6, 28.0], [34.7, 28.0], [34.8, 28.0], [34.9, 28.0], [35.0, 29.0], [35.1, 29.0], [35.2, 29.0], [35.3, 29.0], [35.4, 29.0], [35.5, 29.0], [35.6, 29.0], [35.7, 29.0], [35.8, 29.0], [35.9, 29.0], [36.0, 29.0], [36.1, 30.0], [36.2, 30.0], [36.3, 30.0], [36.4, 30.0], [36.5, 30.0], [36.6, 30.0], [36.7, 30.0], [36.8, 30.0], [36.9, 30.0], [37.0, 30.0], [37.1, 30.0], [37.2, 30.0], [37.3, 30.0], [37.4, 30.0], [37.5, 30.0], [37.6, 30.0], [37.7, 30.0], [37.8, 31.0], [37.9, 31.0], [38.0, 31.0], [38.1, 31.0], [38.2, 31.0], [38.3, 31.0], [38.4, 31.0], [38.5, 31.0], [38.6, 31.0], [38.7, 31.0], [38.8, 31.0], [38.9, 31.0], [39.0, 31.0], [39.1, 32.0], [39.2, 32.0], [39.3, 32.0], [39.4, 32.0], [39.5, 32.0], [39.6, 32.0], [39.7, 32.0], [39.8, 32.0], [39.9, 33.0], [40.0, 33.0], [40.1, 33.0], [40.2, 33.0], [40.3, 33.0], [40.4, 33.0], [40.5, 33.0], [40.6, 33.0], [40.7, 33.0], [40.8, 34.0], [40.9, 34.0], [41.0, 34.0], [41.1, 34.0], [41.2, 34.0], [41.3, 34.0], [41.4, 34.0], [41.5, 34.0], [41.6, 34.0], [41.7, 35.0], [41.8, 35.0], [41.9, 35.0], [42.0, 35.0], [42.1, 35.0], [42.2, 35.0], [42.3, 35.0], [42.4, 35.0], [42.5, 35.0], [42.6, 35.0], [42.7, 36.0], [42.8, 36.0], [42.9, 36.0], [43.0, 36.0], [43.1, 36.0], [43.2, 36.0], [43.3, 36.0], [43.4, 36.0], [43.5, 37.0], [43.6, 37.0], [43.7, 37.0], [43.8, 37.0], [43.9, 37.0], [44.0, 37.0], [44.1, 37.0], [44.2, 38.0], [44.3, 38.0], [44.4, 38.0], [44.5, 38.0], [44.6, 38.0], [44.7, 38.0], [44.8, 38.0], [44.9, 38.0], [45.0, 39.0], [45.1, 39.0], [45.2, 39.0], [45.3, 39.0], [45.4, 39.0], [45.5, 39.0], [45.6, 39.0], [45.7, 39.0], [45.8, 40.0], [45.9, 40.0], [46.0, 40.0], [46.1, 40.0], [46.2, 40.0], [46.3, 40.0], [46.4, 41.0], [46.5, 41.0], [46.6, 41.0], [46.7, 41.0], [46.8, 41.0], [46.9, 41.0], [47.0, 42.0], [47.1, 42.0], [47.2, 42.0], [47.3, 42.0], [47.4, 42.0], [47.5, 42.0], [47.6, 42.0], [47.7, 42.0], [47.8, 42.0], [47.9, 43.0], [48.0, 43.0], [48.1, 43.0], [48.2, 43.0], [48.3, 44.0], [48.4, 44.0], [48.5, 44.0], [48.6, 45.0], [48.7, 45.0], [48.8, 45.0], [48.9, 45.0], [49.0, 46.0], [49.1, 46.0], [49.2, 46.0], [49.3, 47.0], [49.4, 47.0], [49.5, 47.0], [49.6, 47.0], [49.7, 47.0], [49.8, 48.0], [49.9, 48.0], [50.0, 48.0], [50.1, 48.0], [50.2, 48.0], [50.3, 48.0], [50.4, 48.0], [50.5, 48.0], [50.6, 49.0], [50.7, 49.0], [50.8, 49.0], [50.9, 49.0], [51.0, 50.0], [51.1, 50.0], [51.2, 51.0], [51.3, 51.0], [51.4, 52.0], [51.5, 52.0], [51.6, 52.0], [51.7, 52.0], [51.8, 53.0], [51.9, 53.0], [52.0, 53.0], [52.1, 54.0], [52.2, 54.0], [52.3, 54.0], [52.4, 55.0], [52.5, 55.0], [52.6, 56.0], [52.7, 57.0], [52.8, 57.0], [52.9, 57.0], [53.0, 57.0], [53.1, 57.0], [53.2, 58.0], [53.3, 58.0], [53.4, 58.0], [53.5, 58.0], [53.6, 59.0], [53.7, 59.0], [53.8, 59.0], [53.9, 60.0], [54.0, 61.0], [54.1, 61.0], [54.2, 62.0], [54.3, 62.0], [54.4, 63.0], [54.5, 63.0], [54.6, 64.0], [54.7, 64.0], [54.8, 65.0], [54.9, 66.0], [55.0, 66.0], [55.1, 66.0], [55.2, 67.0], [55.3, 68.0], [55.4, 68.0], [55.5, 68.0], [55.6, 69.0], [55.7, 69.0], [55.8, 70.0], [55.9, 70.0], [56.0, 70.0], [56.1, 72.0], [56.2, 73.0], [56.3, 73.0], [56.4, 75.0], [56.5, 75.0], [56.6, 76.0], [56.7, 77.0], [56.8, 78.0], [56.9, 78.0], [57.0, 79.0], [57.1, 80.0], [57.2, 81.0], [57.3, 81.0], [57.4, 83.0], [57.5, 85.0], [57.6, 85.0], [57.7, 87.0], [57.8, 88.0], [57.9, 91.0], [58.0, 93.0], [58.1, 95.0], [58.2, 97.0], [58.3, 98.0], [58.4, 100.0], [58.5, 101.0], [58.6, 103.0], [58.7, 104.0], [58.8, 105.0], [58.9, 107.0], [59.0, 109.0], [59.1, 110.0], [59.2, 112.0], [59.3, 113.0], [59.4, 114.0], [59.5, 116.0], [59.6, 118.0], [59.7, 119.0], [59.8, 121.0], [59.9, 122.0], [60.0, 124.0], [60.1, 125.0], [60.2, 127.0], [60.3, 130.0], [60.4, 132.0], [60.5, 134.0], [60.6, 136.0], [60.7, 137.0], [60.8, 138.0], [60.9, 139.0], [61.0, 141.0], [61.1, 142.0], [61.2, 142.0], [61.3, 145.0], [61.4, 145.0], [61.5, 146.0], [61.6, 150.0], [61.7, 150.0], [61.8, 152.0], [61.9, 152.0], [62.0, 153.0], [62.1, 155.0], [62.2, 157.0], [62.3, 158.0], [62.4, 158.0], [62.5, 161.0], [62.6, 161.0], [62.7, 162.0], [62.8, 163.0], [62.9, 165.0], [63.0, 165.0], [63.1, 166.0], [63.2, 168.0], [63.3, 169.0], [63.4, 171.0], [63.5, 171.0], [63.6, 173.0], [63.7, 174.0], [63.8, 175.0], [63.9, 176.0], [64.0, 176.0], [64.1, 177.0], [64.2, 178.0], [64.3, 180.0], [64.4, 182.0], [64.5, 183.0], [64.6, 183.0], [64.7, 184.0], [64.8, 185.0], [64.9, 185.0], [65.0, 186.0], [65.1, 186.0], [65.2, 187.0], [65.3, 190.0], [65.4, 191.0], [65.5, 191.0], [65.6, 192.0], [65.7, 193.0], [65.8, 194.0], [65.9, 196.0], [66.0, 197.0], [66.1, 198.0], [66.2, 199.0], [66.3, 200.0], [66.4, 202.0], [66.5, 203.0], [66.6, 203.0], [66.7, 205.0], [66.8, 205.0], [66.9, 206.0], [67.0, 208.0], [67.1, 208.0], [67.2, 210.0], [67.3, 211.0], [67.4, 213.0], [67.5, 213.0], [67.6, 215.0], [67.7, 216.0], [67.8, 217.0], [67.9, 217.0], [68.0, 218.0], [68.1, 219.0], [68.2, 219.0], [68.3, 220.0], [68.4, 220.0], [68.5, 221.0], [68.6, 222.0], [68.7, 223.0], [68.8, 223.0], [68.9, 224.0], [69.0, 226.0], [69.1, 226.0], [69.2, 227.0], [69.3, 228.0], [69.4, 228.0], [69.5, 228.0], [69.6, 229.0], [69.7, 229.0], [69.8, 230.0], [69.9, 231.0], [70.0, 231.0], [70.1, 233.0], [70.2, 233.0], [70.3, 234.0], [70.4, 235.0], [70.5, 236.0], [70.6, 238.0], [70.7, 239.0], [70.8, 240.0], [70.9, 241.0], [71.0, 242.0], [71.1, 243.0], [71.2, 243.0], [71.3, 244.0], [71.4, 244.0], [71.5, 245.0], [71.6, 246.0], [71.7, 246.0], [71.8, 248.0], [71.9, 249.0], [72.0, 250.0], [72.1, 251.0], [72.2, 252.0], [72.3, 253.0], [72.4, 255.0], [72.5, 256.0], [72.6, 256.0], [72.7, 257.0], [72.8, 258.0], [72.9, 258.0], [73.0, 259.0], [73.1, 259.0], [73.2, 259.0], [73.3, 261.0], [73.4, 265.0], [73.5, 266.0], [73.6, 267.0], [73.7, 267.0], [73.8, 269.0], [73.9, 269.0], [74.0, 270.0], [74.1, 271.0], [74.2, 272.0], [74.3, 273.0], [74.4, 274.0], [74.5, 274.0], [74.6, 275.0], [74.7, 279.0], [74.8, 280.0], [74.9, 282.0], [75.0, 284.0], [75.1, 284.0], [75.2, 285.0], [75.3, 287.0], [75.4, 289.0], [75.5, 290.0], [75.6, 290.0], [75.7, 292.0], [75.8, 292.0], [75.9, 293.0], [76.0, 295.0], [76.1, 296.0], [76.2, 298.0], [76.3, 299.0], [76.4, 300.0], [76.5, 301.0], [76.6, 304.0], [76.7, 305.0], [76.8, 306.0], [76.9, 306.0], [77.0, 307.0], [77.1, 310.0], [77.2, 310.0], [77.3, 311.0], [77.4, 312.0], [77.5, 313.0], [77.6, 314.0], [77.7, 315.0], [77.8, 316.0], [77.9, 316.0], [78.0, 317.0], [78.1, 320.0], [78.2, 320.0], [78.3, 323.0], [78.4, 325.0], [78.5, 326.0], [78.6, 326.0], [78.7, 329.0], [78.8, 331.0], [78.9, 332.0], [79.0, 335.0], [79.1, 336.0], [79.2, 338.0], [79.3, 340.0], [79.4, 342.0], [79.5, 343.0], [79.6, 345.0], [79.7, 349.0], [79.8, 350.0], [79.9, 351.0], [80.0, 352.0], [80.1, 354.0], [80.2, 354.0], [80.3, 357.0], [80.4, 358.0], [80.5, 359.0], [80.6, 360.0], [80.7, 362.0], [80.8, 365.0], [80.9, 366.0], [81.0, 367.0], [81.1, 368.0], [81.2, 370.0], [81.3, 373.0], [81.4, 374.0], [81.5, 375.0], [81.6, 377.0], [81.7, 379.0], [81.8, 379.0], [81.9, 381.0], [82.0, 382.0], [82.1, 384.0], [82.2, 385.0], [82.3, 388.0], [82.4, 390.0], [82.5, 390.0], [82.6, 392.0], [82.7, 395.0], [82.8, 399.0], [82.9, 402.0], [83.0, 403.0], [83.1, 405.0], [83.2, 408.0], [83.3, 410.0], [83.4, 412.0], [83.5, 417.0], [83.6, 421.0], [83.7, 423.0], [83.8, 425.0], [83.9, 426.0], [84.0, 430.0], [84.1, 432.0], [84.2, 434.0], [84.3, 437.0], [84.4, 443.0], [84.5, 444.0], [84.6, 445.0], [84.7, 446.0], [84.8, 448.0], [84.9, 449.0], [85.0, 452.0], [85.1, 458.0], [85.2, 464.0], [85.3, 466.0], [85.4, 474.0], [85.5, 476.0], [85.6, 479.0], [85.7, 481.0], [85.8, 488.0], [85.9, 492.0], [86.0, 493.0], [86.1, 498.0], [86.2, 506.0], [86.3, 514.0], [86.4, 527.0], [86.5, 529.0], [86.6, 530.0], [86.7, 536.0], [86.8, 551.0], [86.9, 556.0], [87.0, 560.0], [87.1, 564.0], [87.2, 578.0], [87.3, 587.0], [87.4, 593.0], [87.5, 607.0], [87.6, 624.0], [87.7, 646.0], [87.8, 658.0], [87.9, 667.0], [88.0, 683.0], [88.1, 695.0], [88.2, 713.0], [88.3, 750.0], [88.4, 784.0], [88.5, 817.0], [88.6, 828.0], [88.7, 862.0], [88.8, 952.0], [88.9, 968.0], [89.0, 983.0], [89.1, 1020.0], [89.2, 1051.0], [89.3, 1080.0], [89.4, 1109.0], [89.5, 1116.0], [89.6, 1147.0], [89.7, 1159.0], [89.8, 1162.0], [89.9, 1183.0], [90.0, 1204.0], [90.1, 1205.0], [90.2, 1243.0], [90.3, 1257.0], [90.4, 1310.0], [90.5, 1324.0], [90.6, 1333.0], [90.7, 1341.0], [90.8, 1345.0], [90.9, 1376.0], [91.0, 1392.0], [91.1, 1460.0], [91.2, 1548.0], [91.3, 1587.0], [91.4, 1630.0], [91.5, 1645.0], [91.6, 1702.0], [91.7, 1754.0], [91.8, 1770.0], [91.9, 1836.0], [92.0, 1862.0], [92.1, 1884.0], [92.2, 1922.0], [92.3, 1954.0], [92.4, 1971.0], [92.5, 2006.0], [92.6, 2016.0], [92.7, 2023.0], [92.8, 2038.0], [92.9, 2055.0], [93.0, 2065.0], [93.1, 2116.0], [93.2, 2167.0], [93.3, 2227.0], [93.4, 2294.0], [93.5, 2329.0], [93.6, 2346.0], [93.7, 2350.0], [93.8, 2371.0], [93.9, 2374.0], [94.0, 2377.0], [94.1, 2404.0], [94.2, 2415.0], [94.3, 2424.0], [94.4, 2431.0], [94.5, 2454.0], [94.6, 2460.0], [94.7, 2471.0], [94.8, 2490.0], [94.9, 2502.0], [95.0, 2510.0], [95.1, 2548.0], [95.2, 2591.0], [95.3, 2672.0], [95.4, 2703.0], [95.5, 2756.0], [95.6, 2814.0], [95.7, 2870.0], [95.8, 3001.0], [95.9, 3169.0], [96.0, 3214.0], [96.1, 3236.0], [96.2, 3275.0], [96.3, 3302.0], [96.4, 3310.0], [96.5, 3343.0], [96.6, 3356.0], [96.7, 3362.0], [96.8, 3377.0], [96.9, 3384.0], [97.0, 3400.0], [97.1, 3405.0], [97.2, 3413.0], [97.3, 3420.0], [97.4, 3426.0], [97.5, 3432.0], [97.6, 3447.0], [97.7, 3470.0], [97.8, 3488.0], [97.9, 3499.0], [98.0, 3507.0], [98.1, 3524.0], [98.2, 3543.0], [98.3, 3563.0], [98.4, 3583.0], [98.5, 3601.0], [98.6, 3610.0], [98.7, 3638.0], [98.8, 3642.0], [98.9, 3678.0], [99.0, 3693.0], [99.1, 3701.0], [99.2, 3725.0], [99.3, 3736.0], [99.4, 3747.0], [99.5, 3801.0], [99.6, 3831.0], [99.7, 3846.0], [99.8, 3884.0], [99.9, 3928.0]], "isOverall": false, "label": "insideairbnb docker home redis 125", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 1569.0, "series": [{"data": [[0.0, 1569.0], [600.0, 18.0], [700.0, 9.0], [800.0, 7.0], [900.0, 8.0], [1000.0, 10.0], [1100.0, 16.0], [1200.0, 10.0], [1300.0, 18.0], [1400.0, 3.0], [1500.0, 6.0], [100.0, 212.0], [1600.0, 6.0], [1700.0, 7.0], [1800.0, 7.0], [1900.0, 9.0], [2000.0, 16.0], [2100.0, 6.0], [2200.0, 4.0], [2300.0, 18.0], [2400.0, 21.0], [2500.0, 10.0], [2600.0, 4.0], [2700.0, 5.0], [2800.0, 4.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 2.0], [200.0, 270.0], [3200.0, 8.0], [3300.0, 20.0], [3400.0, 25.0], [3500.0, 15.0], [3600.0, 16.0], [3700.0, 11.0], [3800.0, 9.0], [3900.0, 5.0], [300.0, 174.0], [400.0, 89.0], [500.0, 36.0]], "isOverall": false, "label": "insideairbnb docker home redis 125", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 135.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 2314.0, "series": [{"data": [[0.0, 2314.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 135.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 238.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.654715181E12, "maxY": 1.0, "series": [{"data": [[1.654715187E12, 1.0], [1.6547151885E12, 1.0], [1.6547152095E12, 1.0], [1.6547152065E12, 1.0], [1.6547151855E12, 1.0], [1.654715208E12, 1.0], [1.6547151825E12, 1.0], [1.6547152035E12, 1.0], [1.654715184E12, 1.0], [1.654715205E12, 1.0], [1.6547152005E12, 1.0], [1.654715202E12, 1.0], [1.654715181E12, 1.0], [1.6547151975E12, 1.0], [1.654715199E12, 1.0], [1.654715196E12, 1.0], [1.654715214E12, 1.0], [1.654715193E12, 1.0], [1.6547151945E12, 1.0], [1.6547152155E12, 1.0], [1.65471519E12, 1.0], [1.654715211E12, 1.0], [1.6547152125E12, 1.0], [1.6547151915E12, 1.0]], "isOverall": false, "label": "parallel bzm - Parallel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 21.06578947368421, "minX": 1.0, "maxY": 3502.0, "series": [{"data": [[2.0, 21.06578947368421], [3.0, 38.701818181818176], [4.0, 44.327272727272714], [5.0, 50.19310344827584], [6.0, 47.808510638297875], [7.0, 92.03125], [8.0, 87.5438596491228], [9.0, 104.90625], [10.0, 152.7], [11.0, 666.0], [12.0, 1210.0], [13.0, 399.6666666666667], [14.0, 622.5], [15.0, 468.5], [16.0, 284.1666666666667], [17.0, 485.3333333333333], [18.0, 621.25], [19.0, 2110.0], [20.0, 130.5], [21.0, 1087.5], [22.0, 1079.0], [23.0, 1645.0], [24.0, 1171.0], [25.0, 446.0], [26.0, 545.2], [27.0, 543.5], [28.0, 123.0], [30.0, 1499.0], [31.0, 598.2857142857142], [32.0, 590.5], [33.0, 612.0], [35.0, 595.5], [34.0, 655.75], [36.0, 761.75], [37.0, 1115.0], [38.0, 550.8571428571429], [39.0, 575.8333333333334], [41.0, 809.1111111111111], [40.0, 346.5], [42.0, 533.8333333333333], [43.0, 496.46153846153845], [44.0, 403.23999999999995], [45.0, 647.0], [47.0, 546.375], [46.0, 444.88235294117646], [48.0, 442.125], [50.0, 1163.25], [51.0, 934.6666666666666], [52.0, 815.6666666666666], [53.0, 447.33333333333337], [54.0, 1058.8], [55.0, 958.0], [57.0, 996.25], [56.0, 262.0], [58.0, 1225.5], [59.0, 2227.0], [61.0, 2346.0], [60.0, 2329.0], [62.0, 2358.0], [64.0, 1326.25], [65.0, 1373.5], [67.0, 552.6666666666666], [66.0, 1554.6666666666667], [70.0, 892.625], [69.0, 255.75], [68.0, 1005.2857142857143], [71.0, 1580.0], [75.0, 3502.0], [74.0, 2431.0], [73.0, 2612.0], [79.0, 1765.0], [78.0, 2548.0], [77.0, 2460.0], [76.0, 2503.0], [81.0, 936.0], [80.0, 1741.5], [83.0, 831.4], [82.0, 1020.5], [85.0, 2088.0], [84.0, 1202.125], [86.0, 1192.142857142857], [87.0, 1582.0], [91.0, 670.4], [90.0, 528.8823529411765], [89.0, 761.75], [88.0, 1496.8], [95.0, 740.2142857142858], [94.0, 721.9166666666666], [92.0, 249.0], [93.0, 818.1111111111111], [96.0, 811.6842105263157], [97.0, 701.421052631579], [99.0, 595.7692307692307], [98.0, 483.8571428571429], [103.0, 852.5833333333335], [102.0, 1815.0], [101.0, 621.0], [100.0, 1130.8], [104.0, 829.1818181818182], [105.0, 1218.6666666666665], [106.0, 1428.5714285714284], [107.0, 744.1428571428571], [108.0, 1159.1764705882354], [110.0, 1300.8], [109.0, 240.77777777777783], [111.0, 496.66666666666674], [115.0, 1247.7142857142856], [114.0, 667.3333333333334], [112.0, 1069.5], [113.0, 289.8888888888889], [117.0, 941.7272727272727], [116.0, 1068.2222222222222], [119.0, 1274.0476190476188], [118.0, 1385.6], [121.0, 844.0], [120.0, 745.5], [123.0, 402.0], [122.0, 3302.0], [124.0, 2026.5], [126.0, 305.5], [127.0, 419.0], [125.0, 3424.0], [132.0, 344.1428571428571], [133.0, 1007.5], [131.0, 379.0], [130.0, 362.0], [134.0, 347.5], [135.0, 308.0], [129.0, 365.0], [128.0, 243.0], [137.0, 857.1999999999999], [139.0, 568.6363636363635], [142.0, 547.3636363636364], [143.0, 558.1666666666667], [141.0, 814.4], [140.0, 348.9333333333334], [138.0, 271.3846153846154], [136.0, 256.0], [145.0, 585.9999999999998], [147.0, 1016.7272727272726], [148.0, 984.0000000000001], [149.0, 990.4736842105261], [146.0, 981.4615384615386], [144.0, 287.40000000000003], [150.0, 574.0], [151.0, 1178.533333333333], [152.0, 1007.8461538461538], [153.0, 1328.6428571428573], [157.0, 1771.4761904761906], [158.0, 1235.3461538461543], [156.0, 1709.857142857143], [155.0, 2166.8124999999995], [159.0, 1790.3333333333333], [154.0, 1598.3076923076924], [160.0, 1566.2222222222222], [161.0, 1222.75], [162.0, 2124.0], [164.0, 463.0], [163.0, 310.0], [1.0, 23.680851063829806]], "isOverall": false, "label": "insideairbnb docker home redis 125", "isController": false}, {"data": [[45.251581689616636, 388.90621510978787]], "isOverall": false, "label": "insideairbnb docker home redis 125-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 164.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1326.0, "minX": 1.654715181E12, "maxY": 1217493.3333333333, "series": [{"data": [[1.654715187E12, 295160.0], [1.6547151885E12, 300330.0], [1.6547152095E12, 933523.3333333334], [1.6547152065E12, 740413.3333333334], [1.6547151855E12, 198466.66666666666], [1.654715208E12, 750990.0], [1.6547151825E12, 101970.0], [1.6547152035E12, 810193.3333333334], [1.654715184E12, 187750.0], [1.654715205E12, 885433.3333333334], [1.6547152005E12, 702870.0], [1.654715202E12, 783160.0], [1.654715181E12, 91216.66666666667], [1.6547151975E12, 606160.0], [1.654715199E12, 697410.0], [1.654715196E12, 584853.3333333334], [1.654715214E12, 997860.0], [1.654715193E12, 488363.3333333333], [1.6547151945E12, 504343.3333333333], [1.6547152155E12, 1217493.3333333333], [1.65471519E12, 391756.6666666667], [1.654715211E12, 896000.0], [1.6547152125E12, 847716.6666666666], [1.6547151915E12, 402360.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.654715187E12, 4290.0], [1.6547151885E12, 4368.0], [1.6547152095E12, 13572.0], [1.6547152065E12, 10764.0], [1.6547151855E12, 2886.0], [1.654715208E12, 10920.0], [1.6547151825E12, 1482.0], [1.6547152035E12, 11778.0], [1.654715184E12, 2730.0], [1.654715205E12, 12870.0], [1.6547152005E12, 10218.0], [1.654715202E12, 11388.0], [1.654715181E12, 1326.0], [1.6547151975E12, 8814.0], [1.654715199E12, 10140.0], [1.654715196E12, 8502.0], [1.654715214E12, 14508.0], [1.654715193E12, 7098.0], [1.6547151945E12, 7332.0], [1.6547152155E12, 17706.0], [1.65471519E12, 5694.0], [1.654715211E12, 13026.0], [1.6547152125E12, 12324.0], [1.6547151915E12, 5850.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 19.1090909090909, "minX": 1.654715181E12, "maxY": 1630.740088105727, "series": [{"data": [[1.654715187E12, 19.1090909090909], [1.6547151885E12, 19.17857142857143], [1.6547152095E12, 532.8793103448278], [1.6547152065E12, 127.10869565217394], [1.6547151855E12, 19.594594594594593], [1.654715208E12, 366.6785714285714], [1.6547151825E12, 23.263157894736846], [1.6547152035E12, 44.61589403973509], [1.654715184E12, 20.314285714285713], [1.654715205E12, 45.83030303030302], [1.6547152005E12, 28.961832061068705], [1.654715202E12, 51.72602739726029], [1.654715181E12, 36.76470588235294], [1.6547151975E12, 23.86725663716814], [1.654715199E12, 26.961538461538453], [1.654715196E12, 27.091743119266056], [1.654715214E12, 1323.903225806451], [1.654715193E12, 21.626373626373617], [1.6547151945E12, 20.74468085106383], [1.6547152155E12, 1630.740088105727], [1.65471519E12, 19.547945205479454], [1.654715211E12, 728.952095808383], [1.6547152125E12, 626.7405063291144], [1.6547151915E12, 19.159999999999997]], "isOverall": false, "label": "insideairbnb docker home redis 125", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 18.964285714285715, "minX": 1.654715181E12, "maxY": 1630.5550660792949, "series": [{"data": [[1.654715187E12, 18.98181818181818], [1.6547151885E12, 18.964285714285715], [1.6547152095E12, 532.4885057471269], [1.6547152065E12, 126.58695652173914], [1.6547151855E12, 19.37837837837838], [1.654715208E12, 366.3428571428572], [1.6547151825E12, 22.894736842105267], [1.6547152035E12, 44.43708609271522], [1.654715184E12, 20.171428571428578], [1.654715205E12, 45.65454545454548], [1.6547152005E12, 28.755725190839694], [1.654715202E12, 51.35616438356166], [1.654715181E12, 36.29411764705882], [1.6547151975E12, 23.725663716814157], [1.654715199E12, 26.86923076923076], [1.654715196E12, 26.97247706422018], [1.654715214E12, 1323.387096774193], [1.654715193E12, 21.50549450549451], [1.6547151945E12, 20.659574468085108], [1.6547152155E12, 1630.5550660792949], [1.65471519E12, 19.356164383561644], [1.654715211E12, 728.5808383233534], [1.6547152125E12, 626.4367088607596], [1.6547151915E12, 19.080000000000002]], "isOverall": false, "label": "insideairbnb docker home redis 125", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 4.545454545454548, "minX": 1.654715181E12, "maxY": 33.316091954022994, "series": [{"data": [[1.654715187E12, 4.545454545454548], [1.6547151885E12, 4.910714285714285], [1.6547152095E12, 33.316091954022994], [1.6547152065E12, 13.500000000000004], [1.6547151855E12, 5.243243243243243], [1.654715208E12, 20.921428571428574], [1.6547151825E12, 6.894736842105263], [1.6547152035E12, 8.125827814569535], [1.654715184E12, 5.799999999999998], [1.654715205E12, 8.090909090909092], [1.6547152005E12, 6.4045801526717545], [1.654715202E12, 8.904109589041095], [1.654715181E12, 8.941176470588236], [1.6547151975E12, 5.371681415929206], [1.654715199E12, 5.9923076923076914], [1.654715196E12, 5.7981651376146806], [1.654715214E12, 23.198924731182792], [1.654715193E12, 5.186813186813189], [1.6547151945E12, 4.680851063829787], [1.6547152155E12, 21.25110132158592], [1.65471519E12, 4.643835616438356], [1.654715211E12, 31.251497005987996], [1.6547152125E12, 13.556962025316462], [1.6547151915E12, 4.679999999999999]], "isOverall": false, "label": "insideairbnb docker home redis 125", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.654715181E12, "maxY": 3960.0, "series": [{"data": [[1.654715187E12, 27.0], [1.6547151885E12, 26.0], [1.6547152095E12, 1770.0], [1.6547152065E12, 604.0], [1.6547151855E12, 22.0], [1.654715208E12, 1333.0], [1.6547151825E12, 33.0], [1.6547152035E12, 110.0], [1.654715184E12, 29.0], [1.654715205E12, 94.0], [1.6547152005E12, 83.0], [1.654715202E12, 207.0], [1.654715181E12, 136.0], [1.6547151975E12, 43.0], [1.654715199E12, 45.0], [1.654715196E12, 103.0], [1.654715214E12, 3910.0], [1.654715193E12, 43.0], [1.6547151945E12, 34.0], [1.6547152155E12, 3960.0], [1.65471519E12, 28.0], [1.654715211E12, 2528.0], [1.6547152125E12, 3686.0], [1.6547151915E12, 26.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.654715187E12, 22.0], [1.6547151885E12, 22.0], [1.6547152095E12, 1331.0], [1.6547152065E12, 261.80000000000007], [1.6547151855E12, 22.0], [1.654715208E12, 757.2], [1.6547151825E12, 28.0], [1.6547152035E12, 69.0], [1.654715184E12, 21.4], [1.654715205E12, 67.4], [1.6547152005E12, 41.8], [1.654715202E12, 81.60000000000002], [1.654715181E12, 114.39999999999998], [1.6547151975E12, 31.60000000000001], [1.654715199E12, 36.0], [1.654715196E12, 39.0], [1.654715214E12, 3660.2000000000007], [1.654715193E12, 26.0], [1.6547151945E12, 25.0], [1.6547152155E12, 3487.0000000000005], [1.65471519E12, 23.60000000000001], [1.654715211E12, 2169.4], [1.6547152125E12, 2685.7], [1.6547151915E12, 22.400000000000006]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.654715187E12, 27.0], [1.6547151885E12, 26.0], [1.6547152095E12, 1618.5], [1.6547152065E12, 592.2999999999995], [1.6547151855E12, 22.0], [1.654715208E12, 1278.0600000000004], [1.6547151825E12, 33.0], [1.6547152035E12, 107.39999999999995], [1.654715184E12, 29.0], [1.654715205E12, 91.36000000000001], [1.6547152005E12, 77.24000000000012], [1.654715202E12, 160.9400000000001], [1.654715181E12, 136.0], [1.6547151975E12, 42.86], [1.654715199E12, 45.0], [1.654715196E12, 100.60000000000014], [1.654715214E12, 3887.38], [1.654715193E12, 43.0], [1.6547151945E12, 34.0], [1.6547152155E12, 3946.0], [1.65471519E12, 28.0], [1.654715211E12, 2525.96], [1.6547152125E12, 3620.5099999999998], [1.6547151915E12, 26.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.654715187E12, 24.199999999999996], [1.6547151885E12, 22.299999999999997], [1.6547152095E12, 1386.25], [1.6547152065E12, 426.04999999999995], [1.6547151855E12, 22.0], [1.654715208E12, 1103.8499999999983], [1.6547151825E12, 33.0], [1.6547152035E12, 78.80000000000001], [1.654715184E12, 25.799999999999983], [1.654715205E12, 80.69999999999999], [1.6547152005E12, 48.0], [1.654715202E12, 96.30000000000001], [1.654715181E12, 136.0], [1.6547151975E12, 36.0], [1.654715199E12, 38.89999999999998], [1.654715196E12, 58.0], [1.654715214E12, 3762.0], [1.654715193E12, 30.999999999999957], [1.6547151945E12, 26.0], [1.6547152155E12, 3665.6], [1.65471519E12, 25.0], [1.654715211E12, 2424.0], [1.6547152125E12, 3197.85], [1.6547151915E12, 25.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.654715187E12, 17.0], [1.6547151885E12, 16.0], [1.6547152095E12, 64.0], [1.6547152065E12, 18.0], [1.6547151855E12, 17.0], [1.654715208E12, 93.0], [1.6547151825E12, 19.0], [1.6547152035E12, 21.0], [1.654715184E12, 18.0], [1.654715205E12, 24.0], [1.6547152005E12, 17.0], [1.654715202E12, 21.0], [1.654715181E12, 21.0], [1.6547151975E12, 17.0], [1.654715199E12, 18.0], [1.654715196E12, 16.0], [1.654715214E12, 113.0], [1.654715193E12, 16.0], [1.6547151945E12, 16.0], [1.6547152155E12, 146.0], [1.65471519E12, 16.0], [1.654715211E12, 87.0], [1.6547152125E12, 113.0], [1.6547151915E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.654715187E12, 19.0], [1.6547151885E12, 19.0], [1.6547152095E12, 366.0], [1.6547152065E12, 75.5], [1.6547151855E12, 20.0], [1.654715208E12, 239.0], [1.6547151825E12, 23.0], [1.6547152035E12, 40.0], [1.654715184E12, 20.0], [1.654715205E12, 42.0], [1.6547152005E12, 26.0], [1.654715202E12, 46.0], [1.654715181E12, 25.0], [1.6547151975E12, 23.0], [1.654715199E12, 26.0], [1.654715196E12, 23.0], [1.654715214E12, 403.5], [1.654715193E12, 21.0], [1.6547151945E12, 20.0], [1.6547152155E12, 1590.0], [1.65471519E12, 19.0], [1.654715211E12, 280.0], [1.6547152125E12, 314.5], [1.6547151915E12, 19.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 18.0, "minX": 11.0, "maxY": 2032.0, "series": [{"data": [[36.0, 18.0], [37.0, 19.0], [38.0, 19.0], [48.0, 19.0], [49.0, 18.0], [51.0, 19.0], [60.0, 21.0], [62.0, 20.0], [63.0, 20.0], [73.0, 23.0], [75.0, 23.0], [74.0, 22.0], [86.0, 25.0], [87.0, 29.0], [85.0, 152.0], [88.0, 125.0], [93.0, 48.0], [100.0, 44.0], [104.0, 86.0], [107.0, 39.0], [105.0, 290.0], [111.0, 41.0], [110.0, 312.0], [117.0, 476.0], [122.0, 281.0], [174.0, 2032.0], [11.0, 26.0], [12.0, 24.5], [13.0, 22.0], [22.0, 20.0], [24.0, 19.0], [26.0, 20.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 174.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 18.0, "minX": 11.0, "maxY": 2031.5, "series": [{"data": [[36.0, 18.0], [37.0, 19.0], [38.0, 19.0], [48.0, 18.5], [49.0, 18.0], [51.0, 19.0], [60.0, 21.0], [62.0, 20.0], [63.0, 20.0], [73.0, 23.0], [75.0, 23.0], [74.0, 22.0], [86.0, 25.0], [87.0, 29.0], [85.0, 151.0], [88.0, 124.5], [93.0, 47.0], [100.0, 44.0], [104.0, 86.0], [107.0, 39.0], [105.0, 288.0], [111.0, 41.0], [110.0, 312.0], [117.0, 476.0], [122.0, 280.5], [174.0, 2031.5], [11.0, 26.0], [12.0, 23.5], [13.0, 22.0], [22.0, 20.0], [24.0, 19.0], [26.0, 20.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 174.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.333333333333334, "minX": 1.654715181E12, "maxY": 125.33333333333333, "series": [{"data": [[1.654715187E12, 36.0], [1.6547151885E12, 38.0], [1.6547152095E12, 124.66666666666667], [1.6547152065E12, 112.0], [1.6547151855E12, 25.333333333333332], [1.654715208E12, 124.0], [1.6547151825E12, 12.666666666666666], [1.6547152035E12, 100.0], [1.654715184E12, 23.333333333333332], [1.654715205E12, 112.0], [1.6547152005E12, 87.33333333333333], [1.654715202E12, 98.66666666666667], [1.654715181E12, 11.333333333333334], [1.6547151975E12, 75.33333333333333], [1.654715199E12, 86.0], [1.654715196E12, 74.0], [1.654715214E12, 125.33333333333333], [1.654715193E12, 61.333333333333336], [1.6547151945E12, 62.0], [1.6547152155E12, 53.333333333333336], [1.65471519E12, 48.666666666666664], [1.654715211E12, 125.33333333333333], [1.6547152125E12, 124.66666666666667], [1.6547151915E12, 50.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.333333333333334, "minX": 1.654715181E12, "maxY": 151.33333333333334, "series": [{"data": [[1.654715187E12, 36.666666666666664], [1.6547151885E12, 37.333333333333336], [1.6547152095E12, 116.0], [1.6547152065E12, 92.0], [1.6547151855E12, 24.666666666666668], [1.654715208E12, 93.33333333333333], [1.6547151825E12, 12.666666666666666], [1.6547152035E12, 100.66666666666667], [1.654715184E12, 23.333333333333332], [1.654715205E12, 110.0], [1.6547152005E12, 87.33333333333333], [1.654715202E12, 97.33333333333333], [1.654715181E12, 11.333333333333334], [1.6547151975E12, 75.33333333333333], [1.654715199E12, 86.66666666666667], [1.654715196E12, 72.66666666666667], [1.654715214E12, 124.0], [1.654715193E12, 60.666666666666664], [1.6547151945E12, 62.666666666666664], [1.6547152155E12, 151.33333333333334], [1.65471519E12, 48.666666666666664], [1.654715211E12, 111.33333333333333], [1.6547152125E12, 105.33333333333333], [1.6547151915E12, 50.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.333333333333334, "minX": 1.654715181E12, "maxY": 151.33333333333334, "series": [{"data": [[1.654715187E12, 36.666666666666664], [1.6547151885E12, 37.333333333333336], [1.6547152095E12, 116.0], [1.6547152065E12, 92.0], [1.6547151855E12, 24.666666666666668], [1.654715208E12, 93.33333333333333], [1.6547151825E12, 12.666666666666666], [1.6547152035E12, 100.66666666666667], [1.654715184E12, 23.333333333333332], [1.654715205E12, 110.0], [1.6547152005E12, 87.33333333333333], [1.654715202E12, 97.33333333333333], [1.654715181E12, 11.333333333333334], [1.6547151975E12, 75.33333333333333], [1.654715199E12, 86.66666666666667], [1.654715196E12, 72.66666666666667], [1.654715214E12, 124.0], [1.654715193E12, 60.666666666666664], [1.6547151945E12, 62.666666666666664], [1.6547152155E12, 151.33333333333334], [1.65471519E12, 48.666666666666664], [1.654715211E12, 111.33333333333333], [1.6547152125E12, 105.33333333333333], [1.6547151915E12, 50.0]], "isOverall": false, "label": "insideairbnb docker home redis 125-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.333333333333334, "minX": 1.654715181E12, "maxY": 151.33333333333334, "series": [{"data": [[1.654715187E12, 36.666666666666664], [1.6547151885E12, 37.333333333333336], [1.6547152095E12, 116.0], [1.6547152065E12, 92.0], [1.6547151855E12, 24.666666666666668], [1.654715208E12, 93.33333333333333], [1.6547151825E12, 12.666666666666666], [1.6547152035E12, 100.66666666666667], [1.654715184E12, 23.333333333333332], [1.654715205E12, 110.0], [1.6547152005E12, 87.33333333333333], [1.654715202E12, 97.33333333333333], [1.654715181E12, 11.333333333333334], [1.6547151975E12, 75.33333333333333], [1.654715199E12, 86.66666666666667], [1.654715196E12, 72.66666666666667], [1.654715214E12, 124.0], [1.654715193E12, 60.666666666666664], [1.6547151945E12, 62.666666666666664], [1.6547152155E12, 151.33333333333334], [1.65471519E12, 48.666666666666664], [1.654715211E12, 111.33333333333333], [1.6547152125E12, 105.33333333333333], [1.6547151915E12, 50.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.6547152155E12, "title": "Total Transactions Per Second"}},
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

