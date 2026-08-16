"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../../components/AnimatedCounter";

export default function DashboardPage() {
  const stats = [
    {
      title: "Active Projects",
      value: 12,
      suffix: "",
      icon: "🚀",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "AI Models",
      value: 8,
      suffix: "",
      icon: "🤖",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Team Members",
      value: 24,
      suffix: "",
      icon: "👨‍💻",
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Success Rate",
      value: 98,
      suffix: "%",
      icon: "📈",
      color: "from-orange-500 to-red-500",
    },
  ];

  const progress = [
    {
      title: "Frontend",
      value: 95,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend API",
      value: 80,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Deployment",
      value: 100,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <main className="space-y-10">

      {/* Dashboard Header */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass-card"
      >
        <h1 className="hero-title text-5xl">
          AI Analytics Dashboard
        </h1>

        <p className="hero-description">
          Monitor projects, AI models, team activity and deployment
          performance in one beautiful dashboard.
        </p>
      </motion.section>

      {/* Statistics */}
      <section className="grid">

        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            className="glass-card"
          >
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color}
              flex items-center justify-center text-2xl mb-5`}
            >
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <h2 className="text-5xl font-black mt-4 gradient-text">
              <AnimatedCounter
                value={item.value}
                suffix={item.suffix}
              />
            </h2>
          </motion.div>
        ))}

      </section>

      {/* Activity + Project Status */}
      <section className="grid md:grid-cols-2 gap-8">

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <ul className="space-y-4">

            <motion.li
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              ✅ Dashboard deployed successfully.
            </motion.li>

            <motion.li
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              🚀 Preview build completed.
            </motion.li>

            <motion.li
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              🤖 AI model synchronized.
            </motion.li>

            <motion.li
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              📊 Weekly analytics generated.
            </motion.li>

            <motion.li
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              💡 UI components updated.
            </motion.li>

          </ul>
        </motion.div>

        {/* Project Status */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <h2 className="text-2xl font-bold mb-6">
            Project Status
          </h2>

          <div className="space-y-6">

            {progress.map((item, index) => (

              <div key={item.title}>

                <div className="flex justify-between mb-2">

                  <span>{item.title}</span>

                  <AnimatedCounter
                    value={item.value}
                    suffix="%"
                  />

                </div>

                <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${item.value}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2,
                      duration: 1.3,
                      ease: "easeOut",
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  />

                </div>

              </div>

            ))}

          </div>
        </motion.div>

      </section>

    </main>
  );
}