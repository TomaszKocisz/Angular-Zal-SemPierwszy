export class NewsData {
  public id: number;
  public title: string;
  public imageUrl: string;
  public content: string;
  public likes: number;

  constructor(
    id: number,
    title: string,
    imageUrl: string,
    content: string,
    likes: number
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.content = content;
    this.likes = likes;
  }
}
