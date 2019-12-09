import 'jquery/dist/jquery';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import 'jsgrid/dist/jsgrid';
import 'jsgrid/dist/jsgrid-theme.css';
import 'jsgrid/dist/jsgrid.css';

import {players} from './players';
import numeral from 'numeral';

const sortNum = (a, b) => {
  return numeral(a).value() - numeral(b).value();
};

const loadGrid = () => {
  $('#jsGrid').jsGrid({
    height: '500px',
    width: '100%',

    filtering: true,
    editing: true,
    sorting: true,
    paging: true,
    autoload: true,
    filtering: true,
    pageSize: 15,
    pageButtonCount: 5,

    deleteConfirm: 'Do you really want to delete the player?',

    controller: {
      loadData: function(filter) {
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
      filtering: false,
      sorting: false,
    },
    // Pos(Player 's postion)
    {
      name: 'Pos',
      type: 'text',
      width: 30,
      filtering: false,
      sorting: false,
    },
    // Att / G(Rushing Attempts Per Game Average)
    {
      name: 'Att/G',
      type: 'number',
      width: 50,
      filtering: false,
      sorting: false,
    },
    // Att(Rushing Attempts)
    {
      name: 'Att',
      type: 'number',
      width: 30,
      filtering: false,
      sorting: false,
    },
    // Yrds(Total Rushing Yards)
    {
      name: 'Yds',
      type: 'number',
      width: 50,
      sorter: sortNum,
      filtering: false,
    },
    // Avg(Rushing Average Yards Per Attempt)
    {
      name: 'Avg',
      type: 'number',
      width: 30,
      filtering: false,
      sorting: false,
    },
    // Yds / G(Rushing Yards Per Game)
    {
      name: 'Yds/G',
      type: 'number',
      width: 50,
      filtering: false,
      sorting: false,
    },
    // TD(Total Rushing Touchdowns)
    {
      name: 'TD',
      type: 'number',
      width: 30,
      sorter: sortNum,
      filtering: false,
    },
    // Lng(Longest Rush--a T represents a touchdown occurred)
    {
      name: 'Lng',
      type: 'number',
      width: 30,
      sorter: sortNum,
      filtering: false,
    },
    // 1 st(Rushing First Downs)
    {
      name: '1st',
      type: 'number',
      width: 30,
      filtering: false,
      sorting: false,
    },
    // 1 st % (Rushing First Down Percentage)
    {
      name: '1st%',
      type: 'number',
      width: 30,
      filtering: false,
      sorting: false,
    },
    // 20 + (Rushing 20 + Yards Each)
    {
      name: '20+',
      type: 'number',
      width: 30,
      filtering: false,
      sorting: false,
    },
    // 40 + (Rushing 40 + Yards Each)
    {
      name: '40+',
      type: 'number',
      width: 30,
      filtering: false,
      sorting: false,
    },
    // FUM(Rushing Fumbles).
    {
      name: 'FUM',
      type: 'number',
      width: 30,
      filtering: false,
      sorting: false,
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
