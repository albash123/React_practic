import React from "react";
import {
  Bell,
  Search,
  HelpCircle,
  BookOpen,
  Users,
  Calendar,
  ChevronRight,
} from "lucide-react";

export default function Dashboard() {
  const performanceData = [
    { range: "10", students: 380 },
    { range: "20", students: 370 },
    { range: "30", students: 340 },
    { range: "40", students: 520 },
    { range: "50", students: 260 },
    { range: "60", students: 420 },
    { range: "70", students: 450 },
    { range: "80", students: 200 },
    { range: "90", students: 580 },
    { range: "100", students: 190 },
  ];

  const maxStudents = Math.max(...performanceData.map((d) => d.students));

  const courses = [
    {
      id: 1,
      title: "Advanced Digital Marketing",
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 123,
      enrolled: 350,
      lastUpdated: "September 28, 2024",
    },
    {
      id: 2,
      title: "Social Media Strategy",
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 123,
      enrolled: 350,
      lastUpdated: "September 28, 2024",
    },
    {
      id: 3,
      title: "Branding & Positioning",
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 123,
      enrolled: 350,
      lastUpdated: "September 28, 2024",
    },
  ];

  const upcomingEvents = [
    {
      type: "Live Q&A Session",
      course: "Digital Marketing",
      students: 350,
      date: "October 22, 2024, 11:00 AM",
      status: "Today",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      type: "Assignment Grading",
      course: "Instagram Marketing",
      students: 350,
      date: "October 22, 2024, 11:00 AM",
      status: "Tomorrow",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      type: "Final Quiz",
      course: "Social Media Strategy",
      students: 350,
      date: "October 22, 2024, 11:00 AM",
      status: "Tomorrow",
      statusColor: "bg-blue-100 text-blue-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">
                LearnPro
              </span>
            </div>
            <nav className="flex flex-wrap gap-4 sm:gap-6">
              {[
                "Dashboard",
                "My Courses",
                "Analytics",
                "Grades",
                "Students",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`${
                    i === 0 ? "text-indigo-600" : "text-gray-600"
                  } hover:text-gray-900 text-sm font-medium`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button>
              <Search className="w-5 h-5" />
            </button>
            <button>
              <Bell className="w-5 h-5" />
            </button>
            <button>
              <HelpCircle className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Welcome back, Emily Carter!
              </h1>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded">
                  Create New Course
                </button>
                <button className="border border-white text-white font-semibold px-4 py-2 rounded">
                  View My Courses
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 border border-white/20 rounded p-3 text-white text-center">
                <div className="text-xl sm:text-2xl font-bold">13</div>
                <div className="text-xs sm:text-sm">
                  Total Published Courses
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded p-3 text-white text-center">
                <div className="text-xl sm:text-2xl font-bold">450</div>
                <div className="text-xs sm:text-sm">Active Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Students Summary */}
          <div>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                Students Summary
              </h2>
              <button className="text-indigo-600 flex items-center text-sm">
                View Detail <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow text-center">
                <div className="text-xl sm:text-2xl font-bold text-indigo-600">
                  1,200
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Total Enrolled Students
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <div className="text-xl sm:text-2xl font-bold text-pink-500">
                  150
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  New Enrollments This Month
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <div className="text-xl sm:text-2xl font-bold text-emerald-500">
                  85%
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Retention Rate (Last 3 Months)
                </div>
              </div>
            </div>
          </div>

          {/* Performance Overview */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
              <h2 className="font-semibold">Performance Overview</h2>
              <div className="flex space-x-2">
                <select className="border rounded px-2 py-1 text-sm">
                  <option>All Courses</option>
                </select>
                <button className="text-indigo-600 flex items-center text-sm">
                  View Detail <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            <div className="flex items-end space-x-1 sm:space-x-2 h-48 sm:h-64">
              {performanceData.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-indigo-500 rounded-t"
                    style={{
                      height: `${(item.students / maxStudents) * 160}px`,
                      minHeight: "16px",
                    }}
                  ></div>
                  <div className="text-xs mt-1">{item.range}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Courses */}
          <div>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                Top Published Course
              </h2>
              <button className="text-indigo-600 flex items-center text-sm">
                View More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {courses.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded shadow overflow-hidden"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-28 sm:h-32 object-cover"
                  />
                  <div className="p-2">
                    <div className="font-semibold text-sm">{c.title}</div>
                    <div className="flex items-center text-xs mb-1">
                      <span className="text-yellow-400">⭐</span> {c.rating} (
                      {c.reviews})
                    </div>
                    <div className="text-xs text-gray-500">
                      👤 {c.enrolled} | ⏰ {c.lastUpdated}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded shadow p-4">
            <h2 className="font-semibold mb-2">Coming Up</h2>
            {upcomingEvents.map((e, i) => (
              <div
                key={i}
                className="border-b last:border-b-0 pb-2 mb-2 last:pb-0 last:mb-0"
              >
                <div className="flex justify-between">
                  <div className="font-medium text-sm">{e.type}</div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${e.statusColor}`}
                  >
                    {e.status}
                  </span>
                </div>
                <div className="text-xs text-gray-600">{e.course}</div>
                <div className="text-xs text-gray-500">
                  <Users className="w-3 h-3 inline-block mr-1" />
                  {e.students}
                </div>
                <div className="text-xs text-gray-500">
                  <Calendar className="w-3 h-3 inline-block mr-1" />
                  {e.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
