import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.css"]
})
export class NewsEditorComponent implements OnInit {
  title: string;
  imageUrl: string;
  content: string;
  likes: number;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.title = "";
    this.imageUrl = "";
    this.content = "";
    this.likes = 0;
  }

  addNews() {
    const id: number = Date.now();
    this.newsService.addNews(id, this.title, this.imageUrl, this.content, 0);
    this.title = "";
    this.imageUrl = "";
    this.content = "";
    this.likes = 0;
  }

  getRandomColor() {
    let letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
