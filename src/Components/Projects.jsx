import { motion } from "framer-motion";

const projects = [
  {
    title: "Task Management App",
    desc: `Built with MongoDB Atlas for cloud database storage. The app allows
users to securely sign up and log in with authentication, ensuring
personal task lists are private. After logging in, users can:
.`,
task:["⚫Add new tasks with details such as title, category, priority, and due date",
"⚫Update existing tasks to modify information when needed",
"⚫Delete tasks that are no longer relevant" ,
"⚫Mark tasks as completed, helping users track their progress"],

rest:`With a clean and intuitive interface, the website makes it easy to
manage daily tasks efficiently, while the integration with MongoDB
Atlas ensures data is stored reliably in the cloud`,
    
  },
  {
    title: "Weather App Using OpenWeather API",
    desc: `A responsive Weather Application that fetches real-time weather data
using the OpenWeather API. Users can search by city to view current
temperature, humidity, wind speed, and conditions with intuitive icons.
The app provides accurate forecasts with a simple, user-friendly interface
for quick access to weather updates anytime`,
link:"https://dhiva2003.github.io/D_Weather"
   
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            {
        p.task && p.task.map((t, index) => (
             <p key={index} className="text-gray-600 text-left list-disc ml-5 mb-1">{t}</p>
      ))
            }
         {
            p.rest && <p className="text-gray-600 text-left mt-4">{p.rest}</p>

         }   
         {
          p.link && <p className="text-blue-500 text-center">View Project</p>
         }
          </motion.div>
        ))}
      </div>
    </section>
  );
}
