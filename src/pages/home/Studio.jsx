import { Image } from "antd";
import "./Studio.scss";

const Studio = () => {
  return (
    <section className="studio-container">
      <div className="studio-text-container">
        <span>Studio Apartment</span>
      </div>
      <div className="studio-img-container">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117358808_122880382677016_7786523182090022714_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGtzhf0Up-_ZWgQOriSjb65yGfvUmPvwGbIZ-9SY-_AZk9QIGkl3HfatbYGHSwTstU&_nc_ohc=eaSd-T5YS70AX99AxNd&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfDUai4G4ZzYOh31NU1Pg4VI3ftv6G6EE9Y4PbDGTam2NQ&oe=64C63C1E"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/117303612_122880669343654_3091623601593696078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHqxZ04WG-Wq7Q5toJrX6252HRoyFm6tHXYdGjIWbq0dbsUpe8fvWlWQmaUxuLY0PI&_nc_ohc=brdJOsAZvEAAX9WisFv&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfCEX8xAAx6R3iQZpXTEnLrZ--58kGxUtxemJUFCO8pOwQ&oe=64C6208E"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117225218_122880646010323_3277816748504488843_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEFs5QmCWRxMU6cAuxEPg4qxgaXYT201qDGBpdhPbTWoOc3AZN_PKYjkBHzdOZpQZo&_nc_ohc=0NzjE9eBlkkAX8BQ3bj&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfDLPoXW-SLCUHKmPNmCy73t14U37V4Gx3Jgm43hwS_3og&oe=64C62507"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/117609070_122881269343594_1798913898000562228_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFT37fTqFvL6tV2BiJnTMQptMOeebKtvTO0w555sq29M-CqZEs-leJmVOfRcbpsYPE&_nc_ohc=SZBt0Grx2rYAX_VEguH&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDmvqJhr0iWu-q3l1ozFrVrlfJMfGuUxDC61G0h0vrPwA&oe=64C626A6"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/117015659_122881089343612_5141677732174879446_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGxJxCaHUl8qp9wFxRdcNwV9Ll87Iso3Zj0uXzsiyjdmLimagpfZdXRGF4CWHW0a6Y&_nc_ohc=DldhXn1MLZAAX8bfQ9S&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfAJbK9JPD6L2ljwAZSPjqf-OKT09PkeiYZX8yJginLL5g&oe=64C65480"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/117603087_122881219343599_7005340407572308755_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeH9PlcjqimCD8szkEBhJLzuL4Qe93pqWDIvhB73empYMrM7i_yLyXiCMYtRPwNdSdw&_nc_ohc=5UM0kdVH2kcAX-qZFeJ&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfAYs084dwUMoIAk4A2bpkVW2hgyYDyrTsuRAY2e-hC44A&oe=64C64E46"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117310951_122881049343616_6578891290331374111_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHfXeUEP-nV8DEjdtRn-WCJoFQ6cLercdugVDpwt6tx29mxIFoU-Zmiyf7PkXugNY8&_nc_ohc=jNXYs8DmH6IAX_GcbC8&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBLzTtVVH088OeELLyHFsIB8S8MSpbfEU31JR4Ee5Nt1Q&oe=64C642DA"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117293474_122881009343620_7635364094943977586_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeF0T_eAurMPqCi6aVwu58iAPgV01bq3QgI-BXTVurdCAhMmoKcNbGEq25kr5rMOoc0&_nc_ohc=gq3HYEsZNgoAX-uaiZy&_nc_oc=AQkdKABWZ_BJkg5SxNJV7pi6r_m2q04HTGGMRxqud2VCu9JJDj0Qhmdym_rTPOj55u-7M6yNMhV4zTYcUi6iwZKN&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfDgt6_5nlaPmiFJp5wd6LebVRJHMiqYpwgT9bbKMr33vQ&oe=64C63282"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117313535_122880899343631_2074350345806293881_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHrQ1ihDdPjpPd4nz9uxwA-TRfug44F2w9NF-6DjgXbD3eXKhfQGTzDMJbwhEXzxvI&_nc_ohc=pULLRcvyCYIAX8pIaZf&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBiGO9m14GkIEGSkO96jjkAo4D6Muk9Zq8d_4nCcMmb-g&oe=64C64278"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117445224_122881192676935_3099523996402152436_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGhHbylWcGFu1Aa2BuZU8YB6068t4dNYv3rTry3h01i_TM2L9MVGHFbokxnhXelPf0&_nc_ohc=yWS5qiQv214AX8d0OnU&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBktJP-p28GQtW7YWTl0XSl8RzZMIBwSNsNykmm8kAxNg&oe=64C636E5"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117433873_122880692676985_7755772382230572167_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEqUIICU7aPNv7hbcm6SwdfG187h7VOvrAbXzuHtU6-sNQCo71hgGOcIlqm0BOKb8A&_nc_ohc=E7X4zgfgLeEAX-msSzL&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBtvh8hx76depwm5CkK8WqRd_iFfUjBIBvDyN8i3d17wA&oe=64C641AC"
          />
        </Image.PreviewGroup>
      </div>
    </section>
  );
};

export default Studio;
