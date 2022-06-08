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
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 816.0, "series": [{"data": [[0.0, 15.0], [0.1, 16.0], [0.2, 16.0], [0.3, 16.0], [0.4, 16.0], [0.5, 16.0], [0.6, 17.0], [0.7, 17.0], [0.8, 17.0], [0.9, 17.0], [1.0, 17.0], [1.1, 17.0], [1.2, 17.0], [1.3, 17.0], [1.4, 17.0], [1.5, 17.0], [1.6, 17.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 17.0], [2.1, 17.0], [2.2, 17.0], [2.3, 17.0], [2.4, 17.0], [2.5, 17.0], [2.6, 17.0], [2.7, 17.0], [2.8, 17.0], [2.9, 18.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 18.0], [3.4, 18.0], [3.5, 18.0], [3.6, 18.0], [3.7, 18.0], [3.8, 18.0], [3.9, 18.0], [4.0, 18.0], [4.1, 18.0], [4.2, 18.0], [4.3, 18.0], [4.4, 18.0], [4.5, 18.0], [4.6, 18.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 18.0], [5.1, 18.0], [5.2, 18.0], [5.3, 18.0], [5.4, 18.0], [5.5, 18.0], [5.6, 18.0], [5.7, 18.0], [5.8, 18.0], [5.9, 18.0], [6.0, 18.0], [6.1, 18.0], [6.2, 18.0], [6.3, 18.0], [6.4, 18.0], [6.5, 18.0], [6.6, 18.0], [6.7, 18.0], [6.8, 18.0], [6.9, 18.0], [7.0, 18.0], [7.1, 18.0], [7.2, 18.0], [7.3, 18.0], [7.4, 18.0], [7.5, 18.0], [7.6, 18.0], [7.7, 18.0], [7.8, 18.0], [7.9, 18.0], [8.0, 18.0], [8.1, 18.0], [8.2, 18.0], [8.3, 18.0], [8.4, 18.0], [8.5, 18.0], [8.6, 18.0], [8.7, 18.0], [8.8, 18.0], [8.9, 18.0], [9.0, 18.0], [9.1, 18.0], [9.2, 18.0], [9.3, 18.0], [9.4, 18.0], [9.5, 18.0], [9.6, 18.0], [9.7, 18.0], [9.8, 18.0], [9.9, 18.0], [10.0, 19.0], [10.1, 19.0], [10.2, 19.0], [10.3, 19.0], [10.4, 19.0], [10.5, 19.0], [10.6, 19.0], [10.7, 19.0], [10.8, 19.0], [10.9, 19.0], [11.0, 19.0], [11.1, 19.0], [11.2, 19.0], [11.3, 19.0], [11.4, 19.0], [11.5, 19.0], [11.6, 19.0], [11.7, 19.0], [11.8, 19.0], [11.9, 19.0], [12.0, 19.0], [12.1, 19.0], [12.2, 19.0], [12.3, 19.0], [12.4, 19.0], [12.5, 19.0], [12.6, 19.0], [12.7, 19.0], [12.8, 19.0], [12.9, 19.0], [13.0, 19.0], [13.1, 19.0], [13.2, 19.0], [13.3, 19.0], [13.4, 19.0], [13.5, 19.0], [13.6, 19.0], [13.7, 19.0], [13.8, 19.0], [13.9, 19.0], [14.0, 19.0], [14.1, 19.0], [14.2, 19.0], [14.3, 19.0], [14.4, 19.0], [14.5, 19.0], [14.6, 19.0], [14.7, 19.0], [14.8, 19.0], [14.9, 19.0], [15.0, 19.0], [15.1, 19.0], [15.2, 19.0], [15.3, 19.0], [15.4, 19.0], [15.5, 19.0], [15.6, 19.0], [15.7, 19.0], [15.8, 19.0], [15.9, 19.0], [16.0, 19.0], [16.1, 19.0], [16.2, 19.0], [16.3, 19.0], [16.4, 19.0], [16.5, 19.0], [16.6, 19.0], [16.7, 19.0], [16.8, 19.0], [16.9, 19.0], [17.0, 19.0], [17.1, 19.0], [17.2, 19.0], [17.3, 19.0], [17.4, 19.0], [17.5, 19.0], [17.6, 19.0], [17.7, 19.0], [17.8, 19.0], [17.9, 19.0], [18.0, 19.0], [18.1, 19.0], [18.2, 19.0], [18.3, 19.0], [18.4, 19.0], [18.5, 19.0], [18.6, 19.0], [18.7, 19.0], [18.8, 19.0], [18.9, 19.0], [19.0, 19.0], [19.1, 19.0], [19.2, 20.0], [19.3, 20.0], [19.4, 20.0], [19.5, 20.0], [19.6, 20.0], [19.7, 20.0], [19.8, 20.0], [19.9, 20.0], [20.0, 20.0], [20.1, 20.0], [20.2, 20.0], [20.3, 20.0], [20.4, 20.0], [20.5, 20.0], [20.6, 20.0], [20.7, 20.0], [20.8, 20.0], [20.9, 20.0], [21.0, 20.0], [21.1, 20.0], [21.2, 20.0], [21.3, 20.0], [21.4, 20.0], [21.5, 20.0], [21.6, 20.0], [21.7, 20.0], [21.8, 20.0], [21.9, 20.0], [22.0, 20.0], [22.1, 20.0], [22.2, 20.0], [22.3, 20.0], [22.4, 20.0], [22.5, 20.0], [22.6, 20.0], [22.7, 20.0], [22.8, 20.0], [22.9, 20.0], [23.0, 20.0], [23.1, 20.0], [23.2, 20.0], [23.3, 20.0], [23.4, 20.0], [23.5, 20.0], [23.6, 20.0], [23.7, 20.0], [23.8, 20.0], [23.9, 20.0], [24.0, 20.0], [24.1, 20.0], [24.2, 20.0], [24.3, 20.0], [24.4, 20.0], [24.5, 20.0], [24.6, 20.0], [24.7, 20.0], [24.8, 20.0], [24.9, 20.0], [25.0, 20.0], [25.1, 20.0], [25.2, 20.0], [25.3, 20.0], [25.4, 20.0], [25.5, 20.0], [25.6, 20.0], [25.7, 20.0], [25.8, 20.0], [25.9, 20.0], [26.0, 20.0], [26.1, 20.0], [26.2, 20.0], [26.3, 20.0], [26.4, 20.0], [26.5, 20.0], [26.6, 21.0], [26.7, 21.0], [26.8, 21.0], [26.9, 21.0], [27.0, 21.0], [27.1, 21.0], [27.2, 21.0], [27.3, 21.0], [27.4, 21.0], [27.5, 21.0], [27.6, 21.0], [27.7, 21.0], [27.8, 21.0], [27.9, 21.0], [28.0, 21.0], [28.1, 21.0], [28.2, 21.0], [28.3, 21.0], [28.4, 21.0], [28.5, 21.0], [28.6, 21.0], [28.7, 21.0], [28.8, 21.0], [28.9, 21.0], [29.0, 21.0], [29.1, 21.0], [29.2, 21.0], [29.3, 21.0], [29.4, 21.0], [29.5, 21.0], [29.6, 21.0], [29.7, 21.0], [29.8, 21.0], [29.9, 21.0], [30.0, 21.0], [30.1, 21.0], [30.2, 21.0], [30.3, 21.0], [30.4, 21.0], [30.5, 21.0], [30.6, 21.0], [30.7, 21.0], [30.8, 21.0], [30.9, 21.0], [31.0, 21.0], [31.1, 21.0], [31.2, 21.0], [31.3, 21.0], [31.4, 21.0], [31.5, 21.0], [31.6, 21.0], [31.7, 21.0], [31.8, 22.0], [31.9, 22.0], [32.0, 22.0], [32.1, 22.0], [32.2, 22.0], [32.3, 22.0], [32.4, 22.0], [32.5, 22.0], [32.6, 22.0], [32.7, 22.0], [32.8, 22.0], [32.9, 22.0], [33.0, 22.0], [33.1, 22.0], [33.2, 22.0], [33.3, 22.0], [33.4, 22.0], [33.5, 22.0], [33.6, 22.0], [33.7, 22.0], [33.8, 22.0], [33.9, 22.0], [34.0, 22.0], [34.1, 22.0], [34.2, 22.0], [34.3, 22.0], [34.4, 22.0], [34.5, 22.0], [34.6, 22.0], [34.7, 22.0], [34.8, 22.0], [34.9, 22.0], [35.0, 22.0], [35.1, 22.0], [35.2, 22.0], [35.3, 22.0], [35.4, 22.0], [35.5, 22.0], [35.6, 22.0], [35.7, 23.0], [35.8, 23.0], [35.9, 23.0], [36.0, 23.0], [36.1, 23.0], [36.2, 23.0], [36.3, 23.0], [36.4, 23.0], [36.5, 23.0], [36.6, 23.0], [36.7, 23.0], [36.8, 23.0], [36.9, 23.0], [37.0, 23.0], [37.1, 23.0], [37.2, 23.0], [37.3, 23.0], [37.4, 23.0], [37.5, 23.0], [37.6, 23.0], [37.7, 23.0], [37.8, 23.0], [37.9, 23.0], [38.0, 23.0], [38.1, 23.0], [38.2, 23.0], [38.3, 23.0], [38.4, 23.0], [38.5, 23.0], [38.6, 23.0], [38.7, 23.0], [38.8, 23.0], [38.9, 23.0], [39.0, 23.0], [39.1, 23.0], [39.2, 23.0], [39.3, 23.0], [39.4, 23.0], [39.5, 23.0], [39.6, 24.0], [39.7, 24.0], [39.8, 24.0], [39.9, 24.0], [40.0, 24.0], [40.1, 24.0], [40.2, 24.0], [40.3, 24.0], [40.4, 24.0], [40.5, 24.0], [40.6, 24.0], [40.7, 24.0], [40.8, 24.0], [40.9, 24.0], [41.0, 24.0], [41.1, 24.0], [41.2, 24.0], [41.3, 24.0], [41.4, 24.0], [41.5, 24.0], [41.6, 24.0], [41.7, 24.0], [41.8, 24.0], [41.9, 24.0], [42.0, 24.0], [42.1, 24.0], [42.2, 24.0], [42.3, 24.0], [42.4, 24.0], [42.5, 24.0], [42.6, 24.0], [42.7, 24.0], [42.8, 24.0], [42.9, 25.0], [43.0, 25.0], [43.1, 25.0], [43.2, 25.0], [43.3, 25.0], [43.4, 25.0], [43.5, 25.0], [43.6, 25.0], [43.7, 25.0], [43.8, 25.0], [43.9, 25.0], [44.0, 25.0], [44.1, 25.0], [44.2, 25.0], [44.3, 25.0], [44.4, 25.0], [44.5, 25.0], [44.6, 25.0], [44.7, 25.0], [44.8, 25.0], [44.9, 25.0], [45.0, 25.0], [45.1, 25.0], [45.2, 25.0], [45.3, 25.0], [45.4, 25.0], [45.5, 25.0], [45.6, 25.0], [45.7, 25.0], [45.8, 25.0], [45.9, 25.0], [46.0, 25.0], [46.1, 25.0], [46.2, 25.0], [46.3, 25.0], [46.4, 25.0], [46.5, 25.0], [46.6, 26.0], [46.7, 26.0], [46.8, 26.0], [46.9, 26.0], [47.0, 26.0], [47.1, 26.0], [47.2, 26.0], [47.3, 26.0], [47.4, 26.0], [47.5, 26.0], [47.6, 26.0], [47.7, 26.0], [47.8, 26.0], [47.9, 26.0], [48.0, 26.0], [48.1, 26.0], [48.2, 26.0], [48.3, 26.0], [48.4, 26.0], [48.5, 26.0], [48.6, 26.0], [48.7, 26.0], [48.8, 26.0], [48.9, 26.0], [49.0, 26.0], [49.1, 26.0], [49.2, 26.0], [49.3, 26.0], [49.4, 26.0], [49.5, 26.0], [49.6, 26.0], [49.7, 26.0], [49.8, 27.0], [49.9, 27.0], [50.0, 27.0], [50.1, 27.0], [50.2, 27.0], [50.3, 27.0], [50.4, 27.0], [50.5, 27.0], [50.6, 27.0], [50.7, 27.0], [50.8, 27.0], [50.9, 27.0], [51.0, 27.0], [51.1, 27.0], [51.2, 27.0], [51.3, 27.0], [51.4, 27.0], [51.5, 27.0], [51.6, 27.0], [51.7, 27.0], [51.8, 27.0], [51.9, 27.0], [52.0, 27.0], [52.1, 27.0], [52.2, 27.0], [52.3, 28.0], [52.4, 28.0], [52.5, 28.0], [52.6, 28.0], [52.7, 28.0], [52.8, 28.0], [52.9, 28.0], [53.0, 28.0], [53.1, 28.0], [53.2, 28.0], [53.3, 28.0], [53.4, 28.0], [53.5, 28.0], [53.6, 28.0], [53.7, 28.0], [53.8, 28.0], [53.9, 28.0], [54.0, 28.0], [54.1, 28.0], [54.2, 28.0], [54.3, 28.0], [54.4, 28.0], [54.5, 28.0], [54.6, 28.0], [54.7, 28.0], [54.8, 29.0], [54.9, 29.0], [55.0, 29.0], [55.1, 29.0], [55.2, 29.0], [55.3, 29.0], [55.4, 29.0], [55.5, 29.0], [55.6, 29.0], [55.7, 29.0], [55.8, 29.0], [55.9, 29.0], [56.0, 29.0], [56.1, 29.0], [56.2, 29.0], [56.3, 29.0], [56.4, 29.0], [56.5, 29.0], [56.6, 29.0], [56.7, 29.0], [56.8, 29.0], [56.9, 29.0], [57.0, 30.0], [57.1, 30.0], [57.2, 30.0], [57.3, 30.0], [57.4, 30.0], [57.5, 30.0], [57.6, 30.0], [57.7, 30.0], [57.8, 30.0], [57.9, 30.0], [58.0, 30.0], [58.1, 30.0], [58.2, 30.0], [58.3, 30.0], [58.4, 30.0], [58.5, 30.0], [58.6, 30.0], [58.7, 30.0], [58.8, 30.0], [58.9, 30.0], [59.0, 30.0], [59.1, 30.0], [59.2, 30.0], [59.3, 30.0], [59.4, 30.0], [59.5, 30.0], [59.6, 30.0], [59.7, 30.0], [59.8, 30.0], [59.9, 31.0], [60.0, 31.0], [60.1, 31.0], [60.2, 31.0], [60.3, 31.0], [60.4, 31.0], [60.5, 31.0], [60.6, 31.0], [60.7, 31.0], [60.8, 31.0], [60.9, 31.0], [61.0, 31.0], [61.1, 31.0], [61.2, 31.0], [61.3, 31.0], [61.4, 31.0], [61.5, 31.0], [61.6, 31.0], [61.7, 31.0], [61.8, 31.0], [61.9, 31.0], [62.0, 31.0], [62.1, 31.0], [62.2, 32.0], [62.3, 32.0], [62.4, 32.0], [62.5, 32.0], [62.6, 32.0], [62.7, 32.0], [62.8, 32.0], [62.9, 32.0], [63.0, 32.0], [63.1, 32.0], [63.2, 32.0], [63.3, 32.0], [63.4, 32.0], [63.5, 32.0], [63.6, 32.0], [63.7, 32.0], [63.8, 32.0], [63.9, 32.0], [64.0, 32.0], [64.1, 33.0], [64.2, 33.0], [64.3, 33.0], [64.4, 33.0], [64.5, 33.0], [64.6, 33.0], [64.7, 33.0], [64.8, 33.0], [64.9, 33.0], [65.0, 33.0], [65.1, 33.0], [65.2, 33.0], [65.3, 33.0], [65.4, 33.0], [65.5, 33.0], [65.6, 33.0], [65.7, 33.0], [65.8, 34.0], [65.9, 34.0], [66.0, 34.0], [66.1, 34.0], [66.2, 34.0], [66.3, 34.0], [66.4, 34.0], [66.5, 34.0], [66.6, 34.0], [66.7, 34.0], [66.8, 34.0], [66.9, 34.0], [67.0, 34.0], [67.1, 35.0], [67.2, 35.0], [67.3, 35.0], [67.4, 35.0], [67.5, 35.0], [67.6, 35.0], [67.7, 35.0], [67.8, 35.0], [67.9, 35.0], [68.0, 35.0], [68.1, 35.0], [68.2, 35.0], [68.3, 35.0], [68.4, 35.0], [68.5, 36.0], [68.6, 36.0], [68.7, 36.0], [68.8, 36.0], [68.9, 36.0], [69.0, 36.0], [69.1, 36.0], [69.2, 36.0], [69.3, 36.0], [69.4, 36.0], [69.5, 36.0], [69.6, 36.0], [69.7, 37.0], [69.8, 37.0], [69.9, 37.0], [70.0, 37.0], [70.1, 37.0], [70.2, 37.0], [70.3, 37.0], [70.4, 37.0], [70.5, 37.0], [70.6, 37.0], [70.7, 37.0], [70.8, 37.0], [70.9, 37.0], [71.0, 37.0], [71.1, 37.0], [71.2, 37.0], [71.3, 38.0], [71.4, 38.0], [71.5, 38.0], [71.6, 38.0], [71.7, 38.0], [71.8, 38.0], [71.9, 38.0], [72.0, 38.0], [72.1, 38.0], [72.2, 38.0], [72.3, 38.0], [72.4, 38.0], [72.5, 38.0], [72.6, 38.0], [72.7, 39.0], [72.8, 39.0], [72.9, 39.0], [73.0, 39.0], [73.1, 39.0], [73.2, 39.0], [73.3, 39.0], [73.4, 39.0], [73.5, 39.0], [73.6, 39.0], [73.7, 39.0], [73.8, 39.0], [73.9, 40.0], [74.0, 40.0], [74.1, 40.0], [74.2, 40.0], [74.3, 40.0], [74.4, 40.0], [74.5, 40.0], [74.6, 40.0], [74.7, 40.0], [74.8, 40.0], [74.9, 40.0], [75.0, 40.0], [75.1, 41.0], [75.2, 41.0], [75.3, 41.0], [75.4, 41.0], [75.5, 41.0], [75.6, 41.0], [75.7, 41.0], [75.8, 41.0], [75.9, 41.0], [76.0, 41.0], [76.1, 41.0], [76.2, 41.0], [76.3, 41.0], [76.4, 41.0], [76.5, 42.0], [76.6, 42.0], [76.7, 42.0], [76.8, 42.0], [76.9, 42.0], [77.0, 42.0], [77.1, 42.0], [77.2, 42.0], [77.3, 42.0], [77.4, 43.0], [77.5, 43.0], [77.6, 43.0], [77.7, 43.0], [77.8, 43.0], [77.9, 44.0], [78.0, 44.0], [78.1, 44.0], [78.2, 44.0], [78.3, 44.0], [78.4, 44.0], [78.5, 44.0], [78.6, 44.0], [78.7, 45.0], [78.8, 45.0], [78.9, 45.0], [79.0, 45.0], [79.1, 45.0], [79.2, 45.0], [79.3, 45.0], [79.4, 45.0], [79.5, 45.0], [79.6, 45.0], [79.7, 46.0], [79.8, 46.0], [79.9, 46.0], [80.0, 46.0], [80.1, 46.0], [80.2, 46.0], [80.3, 46.0], [80.4, 46.0], [80.5, 46.0], [80.6, 47.0], [80.7, 47.0], [80.8, 47.0], [80.9, 47.0], [81.0, 47.0], [81.1, 48.0], [81.2, 48.0], [81.3, 48.0], [81.4, 48.0], [81.5, 48.0], [81.6, 48.0], [81.7, 48.0], [81.8, 48.0], [81.9, 48.0], [82.0, 48.0], [82.1, 49.0], [82.2, 49.0], [82.3, 49.0], [82.4, 49.0], [82.5, 49.0], [82.6, 49.0], [82.7, 50.0], [82.8, 50.0], [82.9, 50.0], [83.0, 50.0], [83.1, 50.0], [83.2, 51.0], [83.3, 51.0], [83.4, 51.0], [83.5, 51.0], [83.6, 52.0], [83.7, 52.0], [83.8, 52.0], [83.9, 52.0], [84.0, 53.0], [84.1, 53.0], [84.2, 54.0], [84.3, 55.0], [84.4, 55.0], [84.5, 55.0], [84.6, 56.0], [84.7, 56.0], [84.8, 56.0], [84.9, 56.0], [85.0, 57.0], [85.1, 57.0], [85.2, 57.0], [85.3, 57.0], [85.4, 58.0], [85.5, 58.0], [85.6, 58.0], [85.7, 59.0], [85.8, 59.0], [85.9, 59.0], [86.0, 59.0], [86.1, 60.0], [86.2, 60.0], [86.3, 60.0], [86.4, 60.0], [86.5, 61.0], [86.6, 61.0], [86.7, 62.0], [86.8, 62.0], [86.9, 63.0], [87.0, 63.0], [87.1, 63.0], [87.2, 64.0], [87.3, 65.0], [87.4, 65.0], [87.5, 66.0], [87.6, 66.0], [87.7, 68.0], [87.8, 70.0], [87.9, 70.0], [88.0, 71.0], [88.1, 71.0], [88.2, 73.0], [88.3, 73.0], [88.4, 75.0], [88.5, 76.0], [88.6, 76.0], [88.7, 77.0], [88.8, 78.0], [88.9, 78.0], [89.0, 79.0], [89.1, 79.0], [89.2, 81.0], [89.3, 82.0], [89.4, 84.0], [89.5, 85.0], [89.6, 87.0], [89.7, 87.0], [89.8, 88.0], [89.9, 89.0], [90.0, 89.0], [90.1, 91.0], [90.2, 92.0], [90.3, 92.0], [90.4, 93.0], [90.5, 94.0], [90.6, 97.0], [90.7, 98.0], [90.8, 101.0], [90.9, 104.0], [91.0, 104.0], [91.1, 105.0], [91.2, 106.0], [91.3, 107.0], [91.4, 108.0], [91.5, 110.0], [91.6, 114.0], [91.7, 116.0], [91.8, 117.0], [91.9, 117.0], [92.0, 121.0], [92.1, 122.0], [92.2, 123.0], [92.3, 124.0], [92.4, 124.0], [92.5, 126.0], [92.6, 126.0], [92.7, 128.0], [92.8, 128.0], [92.9, 130.0], [93.0, 131.0], [93.1, 134.0], [93.2, 134.0], [93.3, 136.0], [93.4, 137.0], [93.5, 138.0], [93.6, 139.0], [93.7, 140.0], [93.8, 142.0], [93.9, 145.0], [94.0, 147.0], [94.1, 148.0], [94.2, 150.0], [94.3, 153.0], [94.4, 154.0], [94.5, 157.0], [94.6, 158.0], [94.7, 166.0], [94.8, 172.0], [94.9, 177.0], [95.0, 178.0], [95.1, 179.0], [95.2, 181.0], [95.3, 187.0], [95.4, 192.0], [95.5, 198.0], [95.6, 207.0], [95.7, 208.0], [95.8, 212.0], [95.9, 217.0], [96.0, 219.0], [96.1, 223.0], [96.2, 225.0], [96.3, 238.0], [96.4, 240.0], [96.5, 243.0], [96.6, 250.0], [96.7, 258.0], [96.8, 264.0], [96.9, 271.0], [97.0, 276.0], [97.1, 287.0], [97.2, 290.0], [97.3, 292.0], [97.4, 306.0], [97.5, 313.0], [97.6, 319.0], [97.7, 329.0], [97.8, 331.0], [97.9, 336.0], [98.0, 338.0], [98.1, 347.0], [98.2, 368.0], [98.3, 374.0], [98.4, 376.0], [98.5, 378.0], [98.6, 385.0], [98.7, 420.0], [98.8, 428.0], [98.9, 434.0], [99.0, 443.0], [99.1, 479.0], [99.2, 496.0], [99.3, 533.0], [99.4, 564.0], [99.5, 580.0], [99.6, 599.0], [99.7, 627.0], [99.8, 677.0], [99.9, 706.0], [100.0, 816.0]], "isOverall": false, "label": "insideairbnb docker home redis 100", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1951.0, "series": [{"data": [[0.0, 1951.0], [300.0, 29.0], [600.0, 4.0], [700.0, 2.0], [200.0, 38.0], [100.0, 103.0], [400.0, 12.0], [800.0, 1.0], [500.0, 10.0]], "isOverall": false, "label": "insideairbnb docker home redis 100", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 2133.0, "series": [{"data": [[0.0, 2133.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 17.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6545337725E12, "maxY": 1.0, "series": [{"data": [[1.654533777E12, 1.0], [1.654533798E12, 1.0], [1.6545337785E12, 1.0], [1.6545337995E12, 1.0], [1.65453378E12, 1.0], [1.654533801E12, 1.0], [1.6545338025E12, 1.0], [1.6545337725E12, 1.0], [1.6545337935E12, 1.0], [1.654533774E12, 1.0], [1.654533795E12, 1.0], [1.6545337755E12, 1.0], [1.6545337965E12, 1.0], [1.6545337875E12, 1.0], [1.654533789E12, 1.0], [1.6545337905E12, 1.0], [1.654533792E12, 1.0], [1.654533804E12, 1.0], [1.6545337815E12, 1.0], [1.654533783E12, 1.0], [1.6545337845E12, 1.0], [1.6545338055E12, 1.0], [1.654533786E12, 1.0], [1.654533807E12, 1.0]], "isOverall": false, "label": "parallel bzm - Parallel", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.654533807E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.11461318051575, "minX": 1.0, "maxY": 402.6666666666667, "series": [{"data": [[2.0, 21.459130434782615], [33.0, 338.40000000000003], [32.0, 284.05555555555554], [34.0, 285.6666666666667], [35.0, 316.7142857142857], [37.0, 311.0], [36.0, 348.75], [38.0, 402.6666666666667], [3.0, 28.63068181818183], [4.0, 36.183229813664624], [5.0, 43.28500000000001], [6.0, 49.701492537313435], [7.0, 74.13636363636364], [8.0, 73.83333333333333], [9.0, 76.5925925925926], [11.0, 114.92857142857142], [12.0, 130.00000000000003], [13.0, 110.60000000000001], [14.0, 123.66666666666669], [15.0, 125.0], [1.0, 20.11461318051575], [16.0, 356.0], [17.0, 216.14285714285714], [18.0, 208.25], [19.0, 305.55555555555554], [20.0, 385.5], [21.0, 102.16666666666666], [22.0, 232.16666666666666], [23.0, 241.2], [24.0, 321.8], [25.0, 199.5], [26.0, 98.0], [27.0, 309.0], [28.0, 190.8], [29.0, 194.46153846153842], [30.0, 239.0], [31.0, 276.375]], "isOverall": false, "label": "insideairbnb docker home redis 100", "isController": false}, {"data": [[5.113023255813955, 50.36046511627908]], "isOverall": false, "label": "insideairbnb docker home redis 100-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 38.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1170.0, "minX": 1.6545337725E12, "maxY": 949806.6666666666, "series": [{"data": [[1.654533777E12, 160820.0], [1.654533798E12, 724493.3333333334], [1.6545337785E12, 241360.0], [1.6545337995E12, 799473.3333333334], [1.65453378E12, 241406.66666666666], [1.654533801E12, 670786.6666666666], [1.6545338025E12, 949806.6666666666], [1.6545337725E12, 85906.66666666667], [1.6545337935E12, 638786.6666666666], [1.654533774E12, 80423.33333333333], [1.654533795E12, 648943.3333333334], [1.6545337755E12, 160940.0], [1.6545337965E12, 719140.0], [1.6545337875E12, 482986.6666666667], [1.654533789E12, 482890.0], [1.6545337905E12, 563446.6666666666], [1.654533792E12, 563346.6666666666], [1.654533804E12, 799433.3333333334], [1.6545337815E12, 305783.3333333333], [1.654533783E12, 338013.3333333333], [1.6545337845E12, 402433.3333333333], [1.6545338055E12, 793976.6666666666], [1.654533786E12, 402576.6666666667], [1.654533807E12, 278943.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.654533777E12, 2340.0], [1.654533798E12, 10530.0], [1.6545337785E12, 3510.0], [1.6545337995E12, 11622.0], [1.65453378E12, 3510.0], [1.654533801E12, 9750.0], [1.6545338025E12, 13806.0], [1.6545337725E12, 1248.0], [1.6545337935E12, 9282.0], [1.654533774E12, 1170.0], [1.654533795E12, 9438.0], [1.6545337755E12, 2340.0], [1.6545337965E12, 10452.0], [1.6545337875E12, 7020.0], [1.654533789E12, 7020.0], [1.6545337905E12, 8190.0], [1.654533792E12, 8190.0], [1.654533804E12, 11622.0], [1.6545337815E12, 4446.0], [1.654533783E12, 4914.0], [1.6545337845E12, 5850.0], [1.6545338055E12, 11544.0], [1.654533786E12, 5850.0], [1.654533807E12, 4056.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.654533807E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 19.159999999999993, "minX": 1.6545337725E12, "maxY": 236.99199999999996, "series": [{"data": [[1.654533777E12, 20.3], [1.654533798E12, 40.20740740740741], [1.6545337785E12, 19.88888888888889], [1.6545337995E12, 33.127516778523486], [1.65453378E12, 20.177777777777777], [1.654533801E12, 236.99199999999996], [1.6545338025E12, 121.90395480225983], [1.6545337725E12, 50.62500000000001], [1.6545337935E12, 24.915966386554622], [1.654533774E12, 24.133333333333333], [1.654533795E12, 26.00000000000001], [1.6545337755E12, 20.666666666666668], [1.6545337965E12, 33.559701492537314], [1.6545337875E12, 20.97777777777778], [1.654533789E12, 21.533333333333342], [1.6545337905E12, 26.314285714285706], [1.654533792E12, 25.552380952380954], [1.654533804E12, 38.11409395973155], [1.6545337815E12, 23.000000000000004], [1.654533783E12, 24.809523809523803], [1.6545337845E12, 19.159999999999993], [1.6545338055E12, 61.93243243243243], [1.654533786E12, 19.24], [1.654533807E12, 38.98076923076923]], "isOverall": false, "label": "insideairbnb docker home redis 100", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.654533807E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.6545337725E12, "maxY": 236.672, "series": [{"data": [[1.654533777E12, 20.099999999999998], [1.654533798E12, 40.111111111111114], [1.6545337785E12, 19.53333333333333], [1.6545337995E12, 32.97315436241609], [1.65453378E12, 19.822222222222223], [1.654533801E12, 236.672], [1.6545338025E12, 121.72316384180789], [1.6545337725E12, 50.37500000000001], [1.6545337935E12, 24.655462184873958], [1.654533774E12, 23.73333333333333], [1.654533795E12, 25.85123966942148], [1.6545337755E12, 20.500000000000004], [1.6545337965E12, 33.470149253731336], [1.6545337875E12, 20.822222222222216], [1.654533789E12, 21.399999999999988], [1.6545337905E12, 26.152380952380962], [1.654533792E12, 25.419047619047625], [1.654533804E12, 37.92617449664428], [1.6545337815E12, 22.526315789473685], [1.654533783E12, 24.555555555555554], [1.6545337845E12, 19.0], [1.6545338055E12, 61.6554054054054], [1.654533786E12, 19.013333333333343], [1.654533807E12, 38.84615384615384]], "isOverall": false, "label": "insideairbnb docker home redis 100", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.654533807E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 5.173333333333331, "minX": 1.6545337725E12, "maxY": 32.184000000000005, "series": [{"data": [[1.654533777E12, 5.3999999999999995], [1.654533798E12, 7.140740740740743], [1.6545337785E12, 5.888888888888889], [1.6545337995E12, 6.416107382550337], [1.65453378E12, 6.0], [1.654533801E12, 32.184000000000005], [1.6545338025E12, 11.853107344632765], [1.6545337725E12, 11.937499999999996], [1.6545337935E12, 5.722689075630252], [1.654533774E12, 7.0], [1.654533795E12, 5.66115702479339], [1.6545337755E12, 6.2], [1.6545337965E12, 7.074626865671643], [1.6545337875E12, 5.6333333333333355], [1.654533789E12, 5.422222222222221], [1.6545337905E12, 5.7904761904761894], [1.654533792E12, 5.752380952380953], [1.654533804E12, 6.97315436241611], [1.6545337815E12, 7.70175438596491], [1.654533783E12, 6.063492063492062], [1.6545337845E12, 5.173333333333331], [1.6545338055E12, 11.601351351351346], [1.654533786E12, 5.319999999999999], [1.654533807E12, 6.519230769230772]], "isOverall": false, "label": "insideairbnb docker home redis 100", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.654533807E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 15.0, "minX": 1.6545337725E12, "maxY": 816.0, "series": [{"data": [[1.654533777E12, 26.0], [1.654533798E12, 130.0], [1.6545337785E12, 25.0], [1.6545337995E12, 56.0], [1.65453378E12, 31.0], [1.654533801E12, 588.0], [1.6545338025E12, 816.0], [1.6545337725E12, 241.0], [1.6545337935E12, 81.0], [1.654533774E12, 31.0], [1.654533795E12, 57.0], [1.6545337755E12, 26.0], [1.6545337965E12, 114.0], [1.6545337875E12, 64.0], [1.654533789E12, 36.0], [1.6545337905E12, 177.0], [1.654533792E12, 60.0], [1.654533804E12, 73.0], [1.6545337815E12, 33.0], [1.654533783E12, 109.0], [1.6545337845E12, 26.0], [1.6545338055E12, 184.0], [1.654533786E12, 25.0], [1.654533807E12, 61.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.654533777E12, 22.0], [1.654533798E12, 61.20000000000002], [1.6545337785E12, 22.0], [1.6545337995E12, 45.0], [1.65453378E12, 24.4], [1.654533801E12, 427.4], [1.6545338025E12, 249.6000000000009], [1.6545337725E12, 177.30000000000007], [1.6545337935E12, 34.0], [1.654533774E12, 28.6], [1.654533795E12, 37.8], [1.6545337755E12, 25.900000000000002], [1.6545337965E12, 49.0], [1.6545337875E12, 25.0], [1.654533789E12, 28.0], [1.6545337905E12, 34.400000000000034], [1.654533792E12, 39.400000000000006], [1.654533804E12, 56.0], [1.6545337815E12, 30.0], [1.654533783E12, 43.80000000000001], [1.6545337845E12, 21.80000000000001], [1.6545338055E12, 121.19999999999999], [1.654533786E12, 21.400000000000006], [1.654533807E12, 50.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.654533777E12, 26.0], [1.654533798E12, 122.79999999999973], [1.6545337785E12, 25.0], [1.6545337995E12, 55.0], [1.65453378E12, 31.0], [1.654533801E12, 585.66], [1.6545338025E12, 794.16], [1.6545337725E12, 241.0], [1.6545337935E12, 73.7999999999999], [1.654533774E12, 31.0], [1.654533795E12, 56.78], [1.6545337755E12, 26.0], [1.6545337965E12, 101.05000000000021], [1.6545337875E12, 64.0], [1.654533789E12, 36.0], [1.6545337905E12, 173.57999999999987], [1.654533792E12, 59.75999999999999], [1.654533804E12, 71.5], [1.6545337815E12, 33.0], [1.654533783E12, 109.0], [1.6545337845E12, 26.0], [1.6545338055E12, 171.25999999999976], [1.654533786E12, 25.0], [1.654533807E12, 61.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.654533777E12, 25.45], [1.654533798E12, 79.59999999999997], [1.6545337785E12, 23.699999999999996], [1.6545337995E12, 48.0], [1.65453378E12, 26.0], [1.654533801E12, 493.5999999999999], [1.6545338025E12, 599.0], [1.6545337725E12, 241.0], [1.6545337935E12, 39.0], [1.654533774E12, 31.0], [1.654533795E12, 42.89999999999999], [1.6545337755E12, 26.0], [1.6545337965E12, 57.75], [1.6545337875E12, 28.35000000000001], [1.654533789E12, 31.0], [1.6545337905E12, 53.19999999999993], [1.654533792E12, 47.099999999999966], [1.654533804E12, 59.0], [1.6545337815E12, 31.0], [1.654533783E12, 67.59999999999998], [1.6545337845E12, 26.0], [1.6545338055E12, 137.64999999999995], [1.654533786E12, 25.0], [1.654533807E12, 59.349999999999994]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.654533777E12, 17.0], [1.654533798E12, 17.0], [1.6545337785E12, 17.0], [1.6545337995E12, 18.0], [1.65453378E12, 16.0], [1.654533801E12, 20.0], [1.6545338025E12, 19.0], [1.6545337725E12, 21.0], [1.6545337935E12, 17.0], [1.654533774E12, 20.0], [1.654533795E12, 17.0], [1.6545337755E12, 17.0], [1.6545337965E12, 17.0], [1.6545337875E12, 17.0], [1.654533789E12, 17.0], [1.6545337905E12, 17.0], [1.654533792E12, 17.0], [1.654533804E12, 20.0], [1.6545337815E12, 18.0], [1.654533783E12, 15.0], [1.6545337845E12, 16.0], [1.6545338055E12, 22.0], [1.654533786E12, 17.0], [1.654533807E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.654533777E12, 20.0], [1.654533798E12, 35.0], [1.6545337785E12, 19.0], [1.6545337995E12, 32.0], [1.65453378E12, 19.0], [1.654533801E12, 225.0], [1.6545338025E12, 62.0], [1.6545337725E12, 24.5], [1.6545337935E12, 23.0], [1.654533774E12, 24.0], [1.654533795E12, 23.0], [1.6545337755E12, 19.0], [1.6545337965E12, 30.5], [1.6545337875E12, 19.5], [1.654533789E12, 20.0], [1.6545337905E12, 21.0], [1.654533792E12, 22.0], [1.654533804E12, 37.0], [1.6545337815E12, 23.0], [1.654533783E12, 19.0], [1.6545337845E12, 19.0], [1.6545338055E12, 47.0], [1.654533786E12, 19.0], [1.654533807E12, 39.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.654533807E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 19.0, "minX": 6.0, "maxY": 217.0, "series": [{"data": [[35.0, 21.0], [37.0, 23.0], [43.0, 20.0], [45.0, 19.0], [50.0, 19.0], [52.0, 39.0], [55.0, 19.0], [60.0, 19.0], [65.0, 21.0], [70.0, 23.0], [75.0, 22.0], [72.0, 217.0], [79.0, 23.0], [81.0, 23.0], [83.0, 25.0], [91.0, 33.0], [90.0, 30.0], [6.0, 57.5], [96.0, 41.0], [98.0, 37.5], [97.0, 37.0], [102.0, 35.5], [113.0, 39.0], [117.0, 178.0], [10.0, 24.0], [15.0, 22.0], [20.0, 20.0], [25.0, 19.0], [30.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 117.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 18.0, "minX": 6.0, "maxY": 213.0, "series": [{"data": [[35.0, 20.0], [37.0, 22.0], [43.0, 20.0], [45.0, 18.0], [50.0, 19.0], [52.0, 38.5], [55.0, 19.0], [60.0, 19.0], [65.0, 21.0], [70.0, 22.5], [75.0, 22.0], [72.0, 213.0], [79.0, 23.0], [81.0, 23.0], [83.0, 25.0], [91.0, 33.0], [90.0, 30.0], [6.0, 57.5], [96.0, 41.0], [98.0, 37.0], [97.0, 37.0], [102.0, 35.0], [113.0, 39.0], [117.0, 178.0], [10.0, 23.5], [15.0, 21.0], [20.0, 19.5], [25.0, 19.0], [30.0, 19.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 117.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.654533771E12, "maxY": 100.0, "series": [{"data": [[1.654533777E12, 20.0], [1.6545337995E12, 100.0], [1.65453378E12, 30.666666666666668], [1.6545338025E12, 100.0], [1.654533771E12, 0.6666666666666666], [1.6545337935E12, 79.33333333333333], [1.654533774E12, 10.0], [1.6545337965E12, 90.0], [1.6545337875E12, 60.0], [1.6545337905E12, 70.0], [1.654533804E12, 100.0], [1.6545337815E12, 38.0], [1.6545337845E12, 50.0], [1.654533807E12, 31.333333333333332], [1.654533798E12, 90.0], [1.6545337785E12, 30.0], [1.654533801E12, 100.0], [1.6545337725E12, 10.0], [1.654533795E12, 80.66666666666667], [1.6545337755E12, 20.0], [1.654533789E12, 60.0], [1.654533792E12, 70.66666666666667], [1.654533783E12, 42.0], [1.6545338055E12, 100.0], [1.654533786E12, 50.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.654533807E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6545337725E12, "maxY": 118.0, "series": [{"data": [[1.654533777E12, 20.0], [1.654533798E12, 90.0], [1.6545337785E12, 30.0], [1.6545337995E12, 99.33333333333333], [1.65453378E12, 30.0], [1.654533801E12, 83.33333333333333], [1.6545338025E12, 118.0], [1.6545337725E12, 10.666666666666666], [1.6545337935E12, 79.33333333333333], [1.654533774E12, 10.0], [1.654533795E12, 80.66666666666667], [1.6545337755E12, 20.0], [1.6545337965E12, 89.33333333333333], [1.6545337875E12, 60.0], [1.654533789E12, 60.0], [1.6545337905E12, 70.0], [1.654533792E12, 70.0], [1.654533804E12, 99.33333333333333], [1.6545337815E12, 38.0], [1.654533783E12, 42.0], [1.6545337845E12, 50.0], [1.6545338055E12, 98.66666666666667], [1.654533786E12, 50.0], [1.654533807E12, 34.666666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1500, "maxX": 1.654533807E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6545337725E12, "maxY": 118.0, "series": [{"data": [[1.654533777E12, 20.0], [1.654533798E12, 90.0], [1.6545337785E12, 30.0], [1.6545337995E12, 99.33333333333333], [1.65453378E12, 30.0], [1.654533801E12, 83.33333333333333], [1.6545338025E12, 118.0], [1.6545337725E12, 10.666666666666666], [1.6545337935E12, 79.33333333333333], [1.654533774E12, 10.0], [1.654533795E12, 80.66666666666667], [1.6545337755E12, 20.0], [1.6545337965E12, 89.33333333333333], [1.6545337875E12, 60.0], [1.654533789E12, 60.0], [1.6545337905E12, 70.0], [1.654533792E12, 70.0], [1.654533804E12, 99.33333333333333], [1.6545337815E12, 38.0], [1.654533783E12, 42.0], [1.6545337845E12, 50.0], [1.6545338055E12, 98.66666666666667], [1.654533786E12, 50.0], [1.654533807E12, 34.666666666666664]], "isOverall": false, "label": "insideairbnb docker home redis 100-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.654533807E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6545337725E12, "maxY": 118.0, "series": [{"data": [[1.654533777E12, 20.0], [1.654533798E12, 90.0], [1.6545337785E12, 30.0], [1.6545337995E12, 99.33333333333333], [1.65453378E12, 30.0], [1.654533801E12, 83.33333333333333], [1.6545338025E12, 118.0], [1.6545337725E12, 10.666666666666666], [1.6545337935E12, 79.33333333333333], [1.654533774E12, 10.0], [1.654533795E12, 80.66666666666667], [1.6545337755E12, 20.0], [1.6545337965E12, 89.33333333333333], [1.6545337875E12, 60.0], [1.654533789E12, 60.0], [1.6545337905E12, 70.0], [1.654533792E12, 70.0], [1.654533804E12, 99.33333333333333], [1.6545337815E12, 38.0], [1.654533783E12, 42.0], [1.6545337845E12, 50.0], [1.6545338055E12, 98.66666666666667], [1.654533786E12, 50.0], [1.654533807E12, 34.666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1500, "maxX": 1.654533807E12, "title": "Total Transactions Per Second"}},
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

