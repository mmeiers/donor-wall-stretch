"use strict";

const $idleScreenContainer3 = $(".container--floaters3");


// Wait for 'WebComponentsReady'.
window.addEventListener("WebComponentsReady", e => {
    const sheet = document.getElementById("googleSheetFloaters3");

  // Respond to floaters it fires.
    sheet.addEventListener("rise-google-sheet-response", e => {
        if (e.detail && e.detail.results) {
          // console.log(e.detail.results);
          createIdleScreen(e.detail.results);
        }
    });


    function createIdleScreen(results) {

      results.shift();

      let floatersData = results.map(data => {
        return `<div class="floaters__entry3">
                    <span class="featured">${data[0]}</span>
                    <span class="floaters__entry--name animate-left">${data[1]}</span>
                </div>`;
      });

      $idleScreenContainer3.empty();

      $idleScreenContainer3.append(floatersData);

      $( ".featured:contains('TRUE')" ).next().addClass( "feature-icon" );
      $( ".featured:contains('FALSE')" ).next().addClass( "regular-icon" );
      $( ".featured:contains('DONOR1')" ).next().addClass( "donor1-icon" );
      $( ".featured:contains('DONOR2')" ).next().addClass( "donor2-icon" );
      $( ".featured:contains('DONOR3')" ).next().addClass( "donor3-icon" );

      $(".container--floaters3 > div:gt(0)").hide();


    };


      sheet.go(); // Executes a request.
});



