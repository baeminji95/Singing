export default class List {
  id;
  title;
  singer;
  key;
  liked;
  albumArt;
  category;
  memo1;
  memo2;

  constructor(title, singer, key, category, albumArt, memo1, memo2, id) {
    this.id = id ? id : 'list-' + new Date()
    this.title = title;
    this.singer = singer;
    this.key = key;
    this.liked = false;
    this.albumArt = albumArt
      ? process.env.PUBLIC_URL + (albumArt.startsWith('/')
        ? albumArt
        : '/' + albumArt)
      : process.env.PUBLIC_URL + '/logo/logo192.png';
    this.category = category;
    this.memo1 = memo1;
    this.memo2 = memo2;
  }
}
