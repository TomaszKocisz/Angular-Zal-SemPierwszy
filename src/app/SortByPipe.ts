import { Pipe, PipeTransform } from "@angular/core";
import { NewsData } from "./news-data";

@Pipe({ name: "sortByPipe" })
export class SortByPipe implements PipeTransform {
  transform(newsList: NewsData[]): NewsData[] {
    return newsList.sort((a: NewsData, b: NewsData) => {
      return b.likes - a.likes;
    });
  }
}
