# プロジェクト概要
個人用のAIアシスタントを作成します。

## アーキテクチャ
プロジェクトフォルダは以下のように`frontend`と `backend`に分ける。


## フロントエンド
基本情報
- 言語: TypeScript
- ライブラリ: Vue 3
- フレームワーク: Nuxt 3
- CSS: Tailwind

実装方針
- 主要なページはpagesディレクトリに実装
- 外部から値を取得して定義する変数は基本的にpagesにファイルに定義
  - 値の外部取得等の関数もpagesに実装する
- composablesにはAPIによる値取得などの処理を書く
- componentsはpagesを構成するコンポーネントを書く
  - なるべく再利用できるようにcompornentを作ってpagesで使用する
  - componentsではAPIによる外部の値取得を行わない
- `<script>`タグは`<template>`タグの上に実装すること

## バックエンド

- 言語: Python
- フレームワーク: FastAPI