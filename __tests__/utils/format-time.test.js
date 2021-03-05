import { formatTime } from '../../source/assets/scripts/utils/format-time';
describe("Test utility JS", () => {
  test('test formatTime', () => {
    expect(formatTime(0)).toEqual("00:00");
    expect(formatTime(10)).toEqual("00:10");

    expect(formatTime(61)).toEqual("01:01");
    expect(formatTime(821)).toEqual("13:41");
  });
});
