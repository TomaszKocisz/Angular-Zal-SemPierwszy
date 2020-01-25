import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./news-data";
import newsInitList from "./news.json";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  onChange = new EventEmitter();

  private news: NewsData[] = newsInitList.map(
    news =>
      new NewsData(news.id, news.title, news.imageUrl, news.content, news.likes)
  );

  constructor() {}

  public getNewsList(): NewsData[] {
    return this.news.slice();
  }

  public addNews(
    id: number,
    title: string,
    imageUrl: string,
    content: string,
    likes: number
  ) {
    this.news.push(new NewsData(id, title, imageUrl, content, likes));
    this.onChange.emit();
  }

  public removeNews(id: number) {
    const index: number = this.findNewsIndexById(id);

    this.news.splice(index, 1);
    this.onChange.emit();
  }

  public likeUp(id: number) {
    const index: number = this.findNewsIndexById(id);

    this.news[index].likes++;
    this.onChange.emit();
  }

  public likeDown(id: number) {
    const index: number = this.findNewsIndexById(id);

    if (this.news[index].likes > 0) {
      this.news[index].likes--;
    }
    this.onChange.emit();
  }

  private findNewsIndexById(id: number): number {
    const index = this.news.findIndex(news => {
      return news.id === id;
    });

    return index;
  }
}
