# API Endpoints Documentation

## Base URL
```
http://localhost:5000/api
```

---

## Authentication Endpoints

### 1. Sign Up
Create a new user account.

**Endpoint:** `POST /auth/signUp`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**cURL Request:**
```bash
curl -X POST http://localhost:5000/api/auth/signUp \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

**Response (Success - 201):**
```json
{
  "msg": "Email is sent to user@example.com"
}
```

**Response (Error - 400):**
```json
{
  "msg": "Invalid input",
  "errors": {
    "field": ["error message"]
  }
}
```

**Validation Rules:**
- `email`: Valid email format (required)
- `password`: Minimum 6 characters, maximum 100 characters (required)
- `confirmPassword`: Must match password (required)

---

### 2. Login
Authenticate user with email and password.

**Endpoint:** `POST /auth/login`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**cURL Request:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

**Response (Success - 200):**
```json
{
  "msg": "Login successful",
  "user": {
    "id": "user_id_here",
    "email": "user@example.com",
    "created_at": "2025-12-07T10:00:00Z"
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "token_type": "bearer",
    "expires_in": 3600
  }
}
```

**Response (Error - 400):**
```json
{
  "msg": "Invalid input or Login failed",
  "error": "Invalid email or password"
}
```

**Validation Rules:**
- `email`: Valid email format (required)
- `password`: Minimum 6 characters, maximum 100 characters (required)

---

## Resume Endpoints

### 3. Submit Resume (Upload)
Upload and parse a resume PDF file.

**Endpoint:** `POST /resume/upload`

**Request Headers:**
```
Authorization: Bearer YOUR_AUTH_TOKEN
Content-Type: multipart/form-data
```

**Request Body:**
- `resume`: PDF file (required)

**cURL Request:**
```bash
curl -X POST http://localhost:5000/api/resume/upload \
  -H "Authorization: Bearer YOUR_AUTH_TOKEN" \
  -F "resume=@/path/to/resume.pdf"
```

**Response (Success - 201):**
```json
{
  "msg": "Resume uploaded and parsed successfully",
  "resume": {
    "id": "resume_id_here",
    "userId": "user_id_here",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "summary": "Experienced software engineer...",
    "yearsOfExperience": 5,
    "imageKitUrl": "https://imagekit.io/path/to/resume.pdf",
    "originalFileName": "resume.pdf",
    "skills": [
      { "id": "skill_1", "name": "javascript" },
      { "id": "skill_2", "name": "typescript" }
    ],
    "experience": [
      {
        "id": "exp_1",
        "title": "Senior Developer",
        "company": "Tech Company",
        "startDate": "2020-01-01",
        "endDate": "2024-12-01",
        "description": "Worked on various projects...",
        "yearsOfExperience": 4,
        "responsibilities": ["Led team", "Developed features"]
      }
    ],
    "education": [
      {
        "id": "edu_1",
        "degree": "Bachelor of Science",
        "institution": "University Name",
        "startDate": "2016-01-01",
        "endDate": "2020-12-01"
      }
    ]
  }
}
```

**Response (Error - 400):**
```json
{
  "msg": "Please upload a PDF file"
}
```

**Response (Error - 401):**
```json
{
  "msg": "User not authenticated"
}
```

**Requirements:**
- Must be authenticated (Bearer token required)
- File must be a PDF
- File size limits apply based on multer configuration

---

## Notes

### Authentication Token
- The `access_token` from the login response should be used in the `Authorization` header as: `Bearer {access_token}`
- Tokens are typically valid for 3600 seconds (1 hour) but may vary

### Error Handling
- All endpoints return appropriate HTTP status codes
- Error responses include a `msg` field with a user-friendly message
- Validation errors include an `errors` field with field-specific messages

### Base URL
- Update `localhost:5000` with your actual API server URL
- Adjust the port as needed for your environment

