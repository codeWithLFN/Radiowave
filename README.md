# 📻 Radiowave

A modern React Native radio streaming application featuring South African radio stations with a sleek, user-friendly interface.

## 🎯 Features

- **Live Radio Streaming**: Stream high-quality audio from multiple South African radio stations
- **Station Browser**: Browse through various radio stations with beautiful card layouts
- **Search Functionality**: Find your favorite stations quickly with built-in search
- **Now Playing Bar**: Persistent audio controls at the bottom of the screen
- **Cross-Platform**: Works on iOS, Android, and web platforms
- **Responsive Design**: Adaptive layout that works on different screen sizes
- **Station Information**: View station details including genre and branding

## 🚀 Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and SDK
- **React Navigation**: Screen navigation and routing
- **React Native Audio Toolkit**: Audio streaming capabilities
- **React Native Sound**: Audio playback functionality

## 📱 Supported Stations

The app includes popular South African radio stations:

- **5FM** - Contemporary Hit Radio
- **Jacaranda FM** - Adult Contemporary
- **Kaya FM** - Urban Adult Contemporary
- **Metro FM** - Urban Contemporary
- **Radio 2000** - Talk Radio
- **Tshwane FM** - Talk Radio
- **WFM** - Talk Radio
- **ZFM** - Talk Radio

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/codeWithLFN/Radiowave.git
   cd Radiowave
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

## 🎮 Usage

### Running on Different Platforms

- **iOS**: `npm run ios` or press `i` in the Expo CLI
- **Android**: `npm run android` or press `a` in the Expo CLI
- **Web**: `npm run web` or press `w` in the Expo CLI

### Navigation

The app consists of three main screens:

1. **Home Screen**: Browse and search through available radio stations
2. **Station Screen**: View detailed information about a selected station
3. **Player Screen**: Full-screen audio player with controls

## 📁 Project Structure

```
Radiowave/
├── App.js                 # Main application component
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
├── babel.config.js       # Babel configuration
├── assets/               # Images and icons
│   ├── icon.png
│   ├── splash.png
│   └── RADIOWAVE_LOGO.png
├── components/           # Reusable components
│   └── NowPlayingBar.js
├── data/                 # Static data files
│   └── radioStations.json
└── screens/              # Application screens
    ├── HomeScreen.js
    ├── PlayerScreen.js
    └── StationScreen.js
```

## 🔧 Configuration

### Adding New Radio Stations

To add new radio stations, edit the `data/radioStations.json` file:

```json
{
  "id": 10,
  "name": "New Station",
  "image": "https://example.com/logo.png",
  "streamUrl": "https://example.com/stream.mp3",
  "genre": "Music Genre"
}
```

### Customizing App Appearance

- **App Icon**: Replace files in the `assets/` directory
- **Splash Screen**: Update `splash.png` and modify `app.json`
- **Colors**: Edit the StyleSheet components in individual screen files

## 📦 Building for Production

### Android APK

```bash
expo build:android
```

### iOS IPA

```bash
expo build:ios
```

### Web Build

```bash
npm run web
expo export:web
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] Add favorites functionality
- [ ] Implement offline caching
- [ ] Add sleep timer
- [ ] Include podcast support
- [ ] Add social sharing features
- [ ] Implement user profiles

## 🐛 Known Issues

- Some stream URLs may require CORS configuration for web deployment
- Audio playback on web platforms may have limitations
- Background audio playback requires additional configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**codeWithLFN**
- GitHub: [@codeWithLFN](https://github.com/codeWithLFN)

## 🙏 Acknowledgments

- Radio station logos and branding belong to their respective owners
- Built with love for the South African radio community
- Thanks to the React Native and Expo communities for excellent documentation

---

**Made with ❤️ in South Africa**