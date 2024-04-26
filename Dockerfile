# Bước 1: Sử dụng image Node.js để build project
FROM node:14 as builder

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép các file cần thiết cho việc cài đặt dependencies
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Build project
RUN npm run build

# Bước 2: Sử dụng image Nginx để phục vụ nội dung
FROM nginx:alpine

# Sao chép các file tĩnh từ 'builder' stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Ọptional: Thay đổi cấu hình mặc định của Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Khai báo sử dụng cổng 80
EXPOSE 80

# Khởi chạy Nginx và giữ container không bị đóng
CMD ["nginx", "-g", "daemon off;"]