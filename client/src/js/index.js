import 'jquery/dist/jquery';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import 'jsgrid/dist/jsgrid';
import 'jsgrid/dist/jsgrid-theme.css';
import 'jsgrid/dist/jsgrid.css';

import {players} from './players';

const loadGrid = () => {
  $('#jsGrid').jsGrid({
    height: '600px',
    width: '100%',

    filtering: true,
    editing: true,
    sorting: true,
    paging: true,
    autoload: true,
    filtering: true,
    pageSize: 25,
    pageButtonCount: 5,

    deleteConfirm: 'Do you really want to delete the player?',

    controller: {
      loadData: function(filter) {
        console.log(filter);
        return players;
      },
    },

    // Player(Player 's name)
    fields: [{
      name: 'Player',
      type: 'text',
      width: 150,
      align: 'left',
    },
    // Team(Player 's team abreviation)
    {
      name: 'Team',
      type: 'text',
      width: 50,
    },
    // Pos(Player 's postion)
    {
      name: 'Pos',
      type: 'text',
      width: 30,
    },
    // Att / G(Rushing Attempts Per Game Average)
    {
      name: 'Att/G"',
      type: 'number',
      width: 30,
    },
    // Att(Rushing Attempts)
    {
      name: 'Att',
      type: 'number',
      width: 30,
    },
    // Yrds(Total Rushing Yards)
    {
      name: 'Yds',
      type: 'number',
      width: 50,
    },
    // Avg(Rushing Average Yards Per Attempt)
    {
      name: 'Avg',
      type: 'number',
      width: 30,
    },
    // Yds / G(Rushing Yards Per Game)
    {
      name: 'Yds/G',
      type: 'number',
      width: 30,
    },
    // TD(Total Rushing Touchdowns)
    {
      name: 'TD',
      type: 'number',
      width: 30,
    },
    // Lng(Longest Rush--a T represents a touchdown occurred)
    {
      name: 'Lng',
      type: 'number',
      width: 30,
    },
    // 1 st(Rushing First Downs)
    {
      name: '1st',
      type: 'number',
      width: 30,
    },
    // 1 st % (Rushing First Down Percentage)
    {
      name: '1st%',
      type: 'number',
      width: 30,
    },
    // 20 + (Rushing 20 + Yards Each)
    {
      name: '20+',
      type: 'number',
      width: 30,
    },
    // 40 + (Rushing 40 + Yards Each)
    {
      name: '40+',
      type: 'number',
      width: 30,
    },
    // FUM(Rushing Fumbles).
    {
      name: 'FUM',
      type: 'number',
      width: 30,
    },
    {
      type: 'control',
    },
    ],
  });
};

$(document).ready(() => {
  loadGrid();
});
