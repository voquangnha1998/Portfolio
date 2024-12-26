import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen py-10 px-5">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* Header Section */}
          <header className="flex items-center gap-6 p-6 bg-orange-500 text-white">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full border-4 border-white"
            />
            <div>
              <h1 className="text-3xl font-bold">Võ Quang Nhả</h1>
              <p className="text-lg">Full Stack Developer</p>
              <p>Email: voquangnhaute@gmail.com</p>
              <p>Birthday: November 07, 1998</p>
              <p>Gender: Male</p>
            </div>
          </header>

          {/* Introduction Section */}
          <section className="p-6">
            <h2 className="text-xl font-bold mb-4">Career Objective</h2>
            <p className="text-justify">
              Hi, my name is Quang Nha! I'm a Software Engineer and I mostly focus on Software Architecture and Development. I will make use of my skills & experience to become a developer .Net professional and bring a lot of value to Customers. Committed to continuous learning and applying cutting-edge solutions to meet business objectives and deliver exceptional user experiences. From that, I will contribute to the development of the Company.
            </p>
          </section>

          <section className="p-6 border-t">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <ul className="list-disc pl-6">
              {/* <li>JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>Node.js, Express</li>
              <li>PostgreSQL, MongoDB</li>
              <li>CI/CD với Jenkins và GitHub Actions</li> */}
            </ul>
          </section>

          {/* Skills Section */}
          <section className="p-6 border-t">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-6">
              {/* <li>JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>Node.js, Express</li>
              <li>PostgreSQL, MongoDB</li>
              <li>CI/CD với Jenkins và GitHub Actions</li> */}
            </ul>
          </section>

          {/* Experience Section */}
          <section className="p-6 border-t">
            <h2 className="text-xl font-bold mb-4">Work experience</h2>
            <div className="mb-4">
              {/* <h3 className="text-lg font-semibold">Công ty ABC</h3>
              <p className="text-gray-700">Vị trí: Senior Developer (2020 - Hiện tại)</p>
              <ul className="list-disc pl-6">
                <li>Xây dựng và triển khai các tính năng mới cho hệ thống ERP.</li>
                <li>Tối ưu hóa hiệu năng và cải thiện bảo mật ứng dụng.</li>
                <li>Hỗ trợ team phát triển các API RESTful và GraphQL.</li>
              </ul> */}
            </div>
          </section>

          <section className="p-6 border-t">
            <h2 className="text-xl font-bold mb-4">Interests</h2>
            <ul className="list-disc pl-6">
              {/* <li>JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>Node.js, Express</li>
              <li>PostgreSQL, MongoDB</li>
              <li>CI/CD với Jenkins và GitHub Actions</li> */}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
