import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-mod border-t-1 lg:mt-[120px] text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white text-xl font-bold mb-3">Магазин</h2>
          <p className="text-sm">
            Качественные товары и лучший сервис. Удовлетворение клиента — наш
            главный приоритет.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Разделы</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'hover:text-white'
                }
              >
                Продукты
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'hover:text-white'
                }
              >
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'hover:text-white'
                }
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Помощь</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'hover:text-white'
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shipping"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'hover:text-white'
                }
              >
                Доставка
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/returns"
                className={({ isActive }) =>
                  isActive ? 'text-white font-semibold' : 'hover:text-white'
                }
              >
                Возврат
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Мы в соцсетях</h3>
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://facebook.com"
              className="hover:text-white"
            >
              <Facebook />
            </a>
            <a
              target="_blank"
              href="https://twitter.com"
              className="hover:text-white"
            >
              <Twitter />
            </a>
            <a
              target="_blank"
              href="https://instagram.com"
              className="hover:text-white"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              href="mailto:info@shop.com"
              className="hover:text-white"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Магазин. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
