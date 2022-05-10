import type { Item } from './item';
import type { NPC } from './npc';
import type { Command } from '../commands';

const move: Command = {
  verb: 'move',
  on: typeof Room,
  args: ['dir'],
};

const look: Command = {
  verb: 'look',
  on: [ typeof Room, typeof Exit ],
  args: [ 'dir?' ],
};

const search: Command = {
  verb: 'search',
  on: typeof Room,
  args: [ 'dir?' ],
};

const open: Command = {
  verb: 'open',
  on: typeof Room,
  args: ['dir'],
};

const close: Command = {
  verb: 'close',
  on: typeof Room,
  args: ['dir'],
};

const lock: Command = {
  verb: 'lock',
  on: typeof Room,
  args: ['dir', 'key'],
};

const unlock: Command = {
  verb: 'unlock',
  on: typeof Room,
  args: ['dir', 'key'],
};

export const roomCommands = {
  move,
  go: move,
  walk: move,
  look,
  search,
  open,
  close,
  lock,
  unlock,
};

export interface Room {
  id: string;
  name: string;
  description: string;
  exits: Exits;
  items: Item[];
  npcs: NPC[];
  move: (dir: string) => Room;
  look: (dir?: string) => string;
  search: () => string;
}

export interface Exits {
  [dir: string]: Exit;
}

export interface Exit {
  id: number;
  name: string;
  description: string,
  opened: boolean;
  locked: boolean;
  keys: Item[];
  roomA: Room;
  roomB: Room;

  look: () => string;
  lock: () => string;
  unlock: (key: Item) => string;
  open: () => string;
  close: () => string;
}

export function Room(id: string, name: string, description: string, exits: Exits, items: Item[], npcs: NPC[]) {
  function move(dir: string) {
    if (exits[dir]) {
      return exits[dir].roomB;
    }
    throw new Error(`There is no ${dir} exit`);
  }

  function look(dir?: string) {
    if (!dir) return description
    if (exits[dir]) return exits[dir].description;
    throw new Error(`There is no ${dir} exit`);
  }

  function search() {
    return "You search the room and find nothing";
  }

  return {
    id,
    name, 
    description,
    exits,
    items,
    npcs,

    move,
    look,
    search,
  }
}

export function Exit(id: string, name: string, description: string, locked: boolean, opened: boolean, keys: Item[], roomA: Room, roomB: Room) {
  function look() {
    return description;
  }

  function lock() {
    if (!locked) {
      locked = true;
      return 'You locked the door.';
    }
    return 'The door is already locked.';
  };

  function unlock(key: Item) {
    if (locked && hasKey(key)) { 
      locked = false;
      return 'You unlocked the door.';
    };
    if (!locked) {
      return 'The door is already unlocked.';
    }
    return 'You don\'t have the key.';
  }

  function hasKey(has: Item) {
    for (let i in keys) {
      let key = keys[i];
      if (key.id === has.id) {
        return true
      }
    }
    return false;
  }

  function open() {
    if (!opened) {
      opened = true;
      return 'You opened the door.';
    }
    return 'The door is already open.';
  }
  
  function close() {
    if (opened) {
      opened = false;
      return 'You closed the door.';
    }
    return 'The door is already closed.';
  }

  return {
    id,
    name,
    description,
    opened,
    locked,
    keys,
    roomA,
    roomB,

    look,
    lock,
    unlock,
    open,
    close,
  }
}