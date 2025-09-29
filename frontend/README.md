# Unique ID System - Frontend

A comprehensive React.js frontend application for the Unique ID System, featuring role-based access control, modern UI/UX, and seamless user experience.

## 🚀 Features

### 🎨 **Modern UI/UX**
- **Dark Theme**: Beautiful dark theme with gradient accents
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG compliant with keyboard navigation

### 👥 **Role-Based System**
- **Citizens**: Application submission, tracking, document management
- **Officers**: Application review, verification, reporting
- **Administrators**: User management, analytics, system configuration

### 🛠️ **Technical Features**
- **React 18**: Latest React with hooks and context
- **React Router**: Client-side routing with protected routes
- **Context API**: State management for auth and applications
- **Custom Hooks**: Reusable logic for forms, API calls, pagination
- **Service Layer**: Clean API integration with error handling
- **Component Library**: Reusable UI components

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Cards/
│   │   │   ├── InfoCard.jsx
│   │   │   ├── InfoCard.css
│   │   │   ├── ApplicationCard.jsx
│   │   │   └── ApplicationCard.css
│   │   ├── Forms/
│   │   │   ├── InputField.jsx
│   │   │   ├── InputField.css
│   │   │   ├── SubmitButton.jsx
│   │   │   └── SubmitButton.css
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Sidebar.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── PageTransition.jsx
│   │   ├── PageTransition.css
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ApplicationContext.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   ├── pages/
│   │   ├── Auth/
│   │   │   └── LoginPage.jsx
│   │   ├── Dashboard/
│   │   │   ├── CitizenDashboard.jsx
│   │   │   ├── OfficerDashboard.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── Dashboard.css
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── NotFound.jsx
│   │   ├── NotFound.css
│   │   ├── Unauthorized.jsx
│   │   └── Unauthorized.css
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── applicationService.js
│   │   └── userService.js
│   ├── styles/
│   │   ├── global.css
│   │   └── auth.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Components

### **Layout Components**
- **Navbar**: Responsive navigation with user menu
- **Sidebar**: Collapsible sidebar with role-based navigation
- **Footer**: Comprehensive footer with links and contact info

### **Dashboard Pages**
- **Citizen Dashboard**: Application management, status tracking
- **Officer Dashboard**: Review queue, processing tools
- **Admin Dashboard**: User management, analytics, system overview

### **Form Components**
- **InputField**: Custom input with validation and icons
- **SubmitButton**: Loading states and multiple variants
- **InfoCard**: Statistics and information display
- **ApplicationCard**: Application listing and management

### **Context Providers**
- **AuthContext**: Authentication state and user management
- **ApplicationContext**: Application data and operations

### **Custom Hooks**
- **useAuth**: Authentication utilities
- **useFetch**: Data fetching with loading states
- **useForm**: Form handling with validation
- **usePagination**: Pagination logic

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_APP_NAME=Unique ID System
REACT_APP_VERSION=1.0.0
```

### Vite Configuration
The project uses Vite for fast development and building. Configuration is in `vite.config.js`.

## 🎨 Styling

### CSS Variables
The project uses CSS custom properties for consistent theming:

```css
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --bg-primary: #0f0f23;
  --bg-secondary: #1a1a2e;
  --text-primary: #ffffff;
  --text-secondary: #e5e7eb;
}
```

### Component Styling
- Each component has its own CSS file
- Uses CSS modules approach with BEM naming
- Responsive design with mobile-first approach
- Dark theme optimized

## 🔐 Authentication & Authorization

### User Roles
- **Citizen**: Submit applications, track status
- **Officer**: Review applications, process requests
- **Admin**: Manage users, system configuration

### Protected Routes
- Role-based access control
- Permission-based component rendering
- Automatic redirects for unauthorized access

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

### Mobile Features
- Touch-friendly interface
- Optimized navigation
- Collapsible sidebar
- Mobile-specific layouts

## 🚀 Performance

### Optimization Features
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Component lazy loading
- **Image Optimization**: Optimized images and icons
- **Bundle Analysis**: Built-in bundle analyzer

### Loading States
- Skeleton screens
- Loading spinners
- Progress indicators
- Error boundaries

## 🧪 Testing

### Testing Setup
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: CloudFlare, AWS CloudFront
- **Server**: Nginx, Apache

### Environment Configuration
- Development: `npm run dev`
- Staging: `npm run build && npm run preview`
- Production: `npm run build`

## 🔧 Development

### Code Style
- ESLint configuration
- Prettier formatting
- Consistent naming conventions
- Component documentation

### Git Workflow
- Feature branches
- Pull request reviews
- Automated testing
- Continuous integration

## 📚 API Integration

### Service Layer
- **api.js**: Base API service with error handling
- **authService.js**: Authentication operations
- **applicationService.js**: Application management
- **userService.js**: User management

### Error Handling
- Global error boundaries
- API error handling
- User-friendly error messages
- Retry mechanisms

## 🎯 Future Enhancements

### Planned Features
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Document preview
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Offline support

### Technical Improvements
- [ ] Unit testing
- [ ] E2E testing
- [ ] Performance monitoring
- [ ] Accessibility improvements
- [ ] SEO optimization

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation
- Test your changes

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Getting Help
- Check the documentation
- Search existing issues
- Create a new issue
- Contact the development team

### Common Issues
- **Build errors**: Check Node.js version and dependencies
- **API errors**: Verify backend server is running
- **Styling issues**: Check CSS variable definitions
- **Routing issues**: Verify route configurations

---

**Built with ❤️ using React, Vite, and modern web technologies.**
