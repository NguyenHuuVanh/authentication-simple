# Frontend - React Application

## 📋 Mô tả

Ứng dụng web frontend được xây dựng bằng React, cung cấp giao diện người dùng hiện đại và responsive.

## 🚀 Công nghệ sử dụng

- **React** - Thư viện JavaScript để xây dựng giao diện người dùng
- **React Router** - Quản lý routing
- **Axios** - HTTP client để gọi API
- **CSS3/SCSS** - Styling

## 📦 Cài đặt

### Yêu cầu hệ thống

- Node.js >= 14.x
- npm >= 6.x hoặc yarn >= 1.22.x

### Các bước cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd frontend
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
```

3. Tạo file `.env`:
```bash
cp .env.example .env
```

4. Cấu hình biến môi trường trong file `.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## 🏃 Chạy ứng dụng

### Development mode
```bash
npm start
# hoặc
yarn start
```

Ứng dụng sẽ chạy tại: `http://localhost:3000`

### Production build
```bash
npm run build
# hoặc
yarn build
```

Build files sẽ được tạo trong thư mục `build/`

### Chạy tests
```bash
npm test
# hoặc
yarn test
```

## 📁 Cấu trúc thư mục
```
frontend/
├── public/              # Static files
│   ├── index.html      # HTML template
│   └── favicon.ico     # Favicon
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── utils/          # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── context/        # React Context
│   ├── styles/         # Global styles
│   ├── App.js          # Root component
│   └── index.js        # Entry point
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Dependencies
└── README.md           # Documentation
```

## 🔧 Scripts có sẵn

| Script | Mô tả |
|--------|-------|
| `npm start` | Chạy app ở development mode |
| `npm test` | Chạy test suite |
| `npm run build` | Build app cho production |
| `npm run eject` | Eject từ Create React App (không thể hoàn tác) |

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API URL | `http://localhost:5000/api` |
| `REACT_APP_ENV` | Environment name | `development` |

## 📝 Coding Standards

- Sử dụng **functional components** và **hooks**
- Đặt tên components theo **PascalCase**
- Đặt tên files theo **camelCase** hoặc **kebab-case**
- Sử dụng **ESLint** để đảm bảo code quality
- Format code với **Prettier**

## 🐛 Debugging

### React Developer Tools

Cài đặt extension:
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Common Issues

**Issue: Port 3000 đã được sử dụng**
```bash
# Đổi port trong package.json hoặc
PORT=3001 npm start
```

**Issue: Module not found**
```bash
# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Tài liệu tham khảo

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://create-react-app.dev/)
- [React Router Documentation](https://reactrouter.com/)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Cảm ơn team đã đóng góp
- Các thư viện open source đã sử dụng
