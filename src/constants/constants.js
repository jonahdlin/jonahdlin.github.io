import { PRIMARY, LIGHT_GREY_1, PRIMARY_3, PRIMARY_2 } from './theme';

export const monthsMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const monthsAbbrevMap = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

export const eventTypeMap = {
  work: {
    iconName: 'work',
    backgroundColour: PRIMARY,
    colour: LIGHT_GREY_1,
  },
  music: {
    iconName: 'music_note',
    backgroundColour: PRIMARY_3,
    colour: LIGHT_GREY_1,
  },
  education: {
    iconName: 'school',
    backgroundColour: PRIMARY_2,
    colour: LIGHT_GREY_1,
  },
};

export const EVENT_DESCRIPTION_BULLET = '•';

export const HEADER_PHOTO_WIDTH = 150;
export const HEADER_PHOTO_WIDTH_REDUCED = 50;
export const HEADER_PHOTO_BORDER_THICKNESS = 3;

export const TIMELINE_LINE_THICKNESS = HEADER_PHOTO_BORDER_THICKNESS;
export const TIMELINE_ICON_DIAMETER = 35;
export const TIMELINE_ICON_OFFSET_FROM_TOP = 10;

export const TIMELINE_EVENT_WIDTH = 450;
export const TIMELINE_EVENT_WIDTH_REDUCED = 250;
export const TIMELINE_EVENT_POINTER_RADIUS = 15;
export const TIMELINE_EVENT_POINTER_SIDE_LENGTH = Math.sqrt(
  Math.pow(TIMELINE_EVENT_POINTER_RADIUS, 2) / 2
);
export const TIMELINE_EVENT_POINTER_DISTANCE_FROM_ICON = 5;
