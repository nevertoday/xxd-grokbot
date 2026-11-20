<div align="center">

# はじめての Grok Bot

[中文](./README.md) · [English](./README.en.md) · **日本語** · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Grok Bot を使いこなすコツは、考え方にあります。

SpaceX で Grok Bot を作っている poteto が、bot に仕事を任せる方法について長い記事を書きました。<br>このガイドは、それを 3 つの短いレッスンにまとめたものです。一度ひととおりやってみれば、毎週あなたの代わりに仕事をしてくれる bot ができあがります。

**[レッスン 1 から始める →](https://grokbot.xiaoxiaodong.ai/ja/start/1-goal/)**　·　**[もう使っている方へ：完全ガイド（英語）→](https://grokbot.xiaoxiaodong.ai/en/guide/0-what/)**

<sub>非公式 · 無料 · オープンソース · 10 言語</sub>

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="デモ：学校のお知らせをいつも見落とすので、日付のあるものはカレンダーに入れてと Potato に頼む。Potato は始める前に、まずそれを言い直す。あなたはルールをふたつ足す。集金は払わずに知らせるだけにすること、日付がはっきりしないときは聞くこと。Potato は日曜の夜のルーティンを設定し、保護者会と古い T シャツをカレンダーに入れたと知らせてくる。左側では 4 つのステップが順に光る。ゴールから始める、やり方を話す、判断のしかたを教える、自分で動いてもらう">
</p>

## もう試したことがあるかもしれません

Grok Bot を入れて、調べものや短い文章の下書きを頼んでみたら、ちゃんとやってくれた。でも金曜日が来ると、やっぱり自分でメールを掘り返し、数字をコピーして、スライドを作っていた。

bot が悪いわけではありません。チャットの AI は返事をくれるだけで、残りはあなた任せです。Grok Bot の bot は、クラウドにコンピューターを持っています。アプリを開き、ウェブを見て、ファイルを整理し、決まった時間に動き出せるので、仕事を本当に最後までやり遂げられます。足りないのは、仕事の渡し方を知ることだけです。

<p align="center">
  <img src="assets/en/readme/chat-vs-bot.svg" width="100%" alt="左：チャットの AI に今週の進み具合をスライドにしてと頼むと、目次が返ってくるだけで、残りはまだあなたの仕事。右：Grok Bot の bot は項目を次々に片づける。今週のメールとチャットを読み、数字をシートと照らし合わせ、スライドを共有フォルダに保存し、毎週金曜の午後 4 時にまたやる。">
</p>

## コツは、晩ごはんで説明できます

poteto は記事の冒頭で、自動化はじつは考え方のひとつで、誰でも身につけられると言っています。それはふたつの部分、ゴールとプロセスでできています。

晩ごはんで考えてみましょう。食卓に並んだごはんがゴールです。買い物、洗う、切る、火を通す。これがプロセスです。たいていの人は、「このメールを送って」のように、プロセスの一歩だけを bot に渡します。だから bot は、いつまでもメールを送るだけ。先にごはんの話をすれば、bot はプロセス全体を引き受けられますし、もっと楽な方法を見つけるかもしれません。疲れた夜に出前を頼んでも、晩ごはんがちゃんと食卓に並ぶように。

<p align="center">
  <img src="assets/en/readme/goal.svg" width="100%" alt="プロセス：買い物、洗う、切る、火を通す。その先にゴール：食卓に並んだ晩ごはん。下には別の道があり、疲れた夜に出前を頼んでも同じゴールに着く。ゴールは最後にほしいもの。プロセスはそこへたどり着く道のりで、変わってもいい。プロセスを bot に任せる。">
</p>

## 3 つのレッスンで、ひとつずつ

コードを書く必要も、たくさんの用語を先に覚える必要もありません。どのレッスンもやることはひとつで、終わるたびに新しいものがひとつ手元に残ります。

<p align="center">
  <img src="assets/en/readme/lessons.svg" width="100%" alt="レッスン 1、ほしい結果を言葉にする、10 分：自分の言葉で書いたゴール。レッスン 2、Potato を作る、15 分：それを覚えている bot。レッスン 3、仕事を任せる、30 分：毎週動く bot。">
</p>

1. **[ほしい結果を言葉にする](https://grokbot.xiaoxiaodong.ai/ja/start/1-goal/)**：よくやる作業をひとつ選んで、何が面倒か、どんな結果がほしいかを、ふだんの言葉で数行に書きます。
2. **[Potato を作る](https://grokbot.xiaoxiaodong.ai/ja/start/2-first-bot/)**：Grok Bot を入れて bot を作り、書いたものを渡します。
3. **[仕事を任せる](https://grokbot.xiaoxiaodong.ai/ja/start/3-hand-over/)**：仕事のやり方を話し、一度うまくできるのを見届けたら、毎週動いてもらいます。

## 待ちきれない？ いますぐメッセージをひとつ

[x.ai/bot](https://x.ai/bot) から Grok Bot を入れて（The X Subscription の Premium、Super、Ultra など、Grok Bot が含まれるプランが必要です）、サイドバーのいちばん上にある**新しいBot**（New Bot）の **+** を押し、名前を `Potato` にして、これを送ってください。

```text
Potato、これからはこの仕事を任せるね。覚えておいて。
毎週金曜の午後、チャットとドキュメントをさかのぼって週報をまとめてるんだけど、これがほんとに面倒。先週と同じ形で今週の分を下書きしておいて。ちょっと直して出すから。そうすれば金曜の午後が空く。
これにちなんで、自分の名前とアバターを決めてね。
```

真ん中の数行を、あなた自身の仕事に変えてください。仕事のやり方を一緒にたどるには、[レッスン 3](https://grokbot.xiaoxiaodong.ai/ja/start/3-hand-over/) を見てください。

## もう使っている方へ

- **[完全ガイド](https://grokbot.xiaoxiaodong.ai/en/guide/0-what/)**（英語）：poteto の記事に沿って、もっと深く進む 8 つのステップです。判断のしかたを教える、アプリをつなぐ、フィードバックから学んでもらう、決まった時間に動かす、何体かの bot でチームを組んで仕事を分ける。
- **[How-to](https://grokbot.xiaoxiaodong.ai/en/howto/)**（英語）：朝のブリーフィング、受信トレイ、お客さんの予約から、レビュー、会議のまとめまで、実際の仕事 15 本。それに、bot が最初にあなたに聞くべきこと、ログイン情報の渡し方、利用枠のしくみも。
- **[Wiki](https://grokbot.xiaoxiaodong.ai/en/wiki/)**、**[よくある質問](https://grokbot.xiaoxiaodong.ai/en/faq/)**（どちらも英語）：知らない言葉や、よくわからない疑問があるときに。

## このガイドのもとになったもの

このガイドは、[poteto](https://x.com/poteto) の記事 [Automate Anything with Grok Bot](https://x.com/poteto/status/2123159537016533493) に沿っています。作者は SpaceX で Grok Bot を作っていて、以前は Cursor で働き、React Compiler のコアチームのメンバーでもあります。機能、ボタン、プランはすべて [Grok Bot の公式ドキュメント](https://docs.x.ai/grok-bot) と照らし合わせています。中国語と日本語のページのボタン名は、それぞれアプリの中国語、日本語の表示に合わせています。

これは非公式のガイドで、xAI、SpaceX、Cursor とは関係がなく、それらを代表するものでもありません。Grok Bot はその所有者の商標です。機能やプランは変わることがあるので、公式ドキュメントを基準にしてください。

## ローカルで動かす

```bash
npm install
npm run dev        # http://localhost:4430
npm run build      # dist/ に出力
```

書き方のルール、資料の出どころ、公式ドキュメントを同期するスクリプトは [docs/MAINTAINING.md](docs/MAINTAINING.md) にあります。サイトの外枠は [pstack 入門ガイド](https://github.com/nevertoday/xxd-pstack) から来ていて、Xiaoxiaodong UI Kit を使っています。コードは MIT ライセンスです。くわしくは [LICENSE](LICENSE) を見てください。
