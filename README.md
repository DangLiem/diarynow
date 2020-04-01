# Diary Now

## Công nghệ sử dụng

* UI/UX dựa trên [Native Base](https://nativebase.io/)

* Design UI [Figma](https://www.figma.com/file/BfXX4fBSdcjcbM1n1oWgpW/nativebase-v1-2-0?node-id=3%3A2543)

* Android Vitural Device Pixel 2 XL trên system image Pie (API 28)

## Usage

* Start emulator
```
emulator -avd ['your device name']
```
* Install modules (in different terminal)
```
npm install
```
* After install, start react-native
```
npm start
```
* Start application (in different terminal)
```
react-native run-android
```
* Remove debug app (in different terminal)
```
adb uninstall com.diarynow
```
* Release app (in different terminal)
[Click me](https://enqtran.com/react-native-build-apk-release/) to know how to release apk
```
cd ./android
./gradlew assembleRelease
```

## Code convention

Code chính trong thư mục src

| Thư mục | Mô tả |
|---|---|
| /apis | Viết các file gọi api CURD |
| /assets | Chứa ảnh, font, ... |
| /components | Chứa các components tái sử dụng trong project |
| /utils | Chứa các file thao tác vs file, generic, ... |
| /views | Chứa các các màn hình sử dụng trong app, ... |

Tất cả các components, views sau khi code xong sẽ được sử dụng trong App.js

## Git convention

### 1. Nhánh master

* Nhánh master là nhánh chính, chứa mọi chức năng đã test và review, bản mobile xây dựng từ nhánh master 
là bản stable cho mọi người sử dụng.

* Mọi hành động liên quan đến code của nhánh master phải được mọi người review code trước khi cho phép
thay đổi (merge code), phải tạo merge request trên gitlab.

### 2. Nhánh release
* Nhánh release là nhánh test chức năng, các nhánh chức năng sau khi code và test xong sẽ phải merge vào nhánh release để test
* Không merge nhánh release vào nhánh master vì có 1 số chức năng fail sẽ không được deploy

### 3. Các nhánh chức năng
#### Quy định về đặt tên nhánh
Các nhánh chức năng phải được tách từ bản stable, tức là nhánh master.

Các nhánh chức năng sẽ được tạo ra trong quá trình dev nhận công việc trên trello, phải tạo nhánh có tên theo định dạng sau:
```
[tên dev]-[mô tả chức năng cần làm]
```
Ví dụ:
```
minhphuong-chuc-nang-dang-nhap
minhphuong-chuc-nang-tao-story
```
Sau khi làm và test xong cần merge lại vào nhánh release, sau mỗi tuần sẽ họp và review chức năng mới trên release và thống nhất chức năng nào sẽ được đẩy lên nhánh master.

#### Quy định về xử lý code khi có bug trên bản stable

Khi phát hiện có bug trên những chức năng đã đẩy lên bản stable, cần phải tạo nhánh bug để fix những lỗi này.

Dựa vào chức năng và tên nhánh chức năng sẽ biết được ai phụ trách làm chức năng đó, người phụ trách sẽ phải tách nhánh từ master để fix với tên theo định dạng:
```
[tên dev]-[mô tả chức năng của nhánh chức năng phát hiện bug]-hotfix-[mô tả bug]]
```
Ví dụ khi nhánh *minhphuong-chuc-nang-dang-nhap* có bug là gọi api đăng nhập lỗi nhưng vẫn cho qua thì phải đặt tên:
```
minhphuong-chuc-nang-dang-nhap-hotfix-loi-goi-api-dang-nhap
```
Sau khi fix xong cần test kĩ và tạo merge request vào nhánh master

Quy trình phải được lặp lại khi phát hiện vẫn còn bug sau khi đã merge vào nhánh master.

### 4. Cách tạo merge request
Xem thêm tại [codetot.net](https://codetot.net/merge-request-gitlab/)

### 5. Màu chủ đề
Lấy từ object ORIGINAL trong constants

### 6. Nguyên tắc chọn màu chữ và màu nền
1. Mực đen trên giấy vàng.
2. Mực xanh lá cây trên giấy trắng.
3. Mực xanh dương trên giấy trắng.
4. Mực trắng trên giấy xanh dương.
5. Mực đen trên giấy trắng.
6. Mực vàng trên giấy đen.
7. Mực trắng trên giấy đỏ.
8. Mực trắng trên giấy xanh lá cây.
9. Mực trắng trên giấy đen.
10. Mực đỏ trên giấy vàng.
11. Mực xanh lá cây trên giấy đỏ.
12. Mực đỏ trên giấy xanh lá cây.