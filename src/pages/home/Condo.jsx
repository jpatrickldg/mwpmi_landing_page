import { Image } from "antd";
import "./Condo.scss";

const Condo = () => {
  return (
    <section className="condo-container">
      <div className="condo-text-container">
        <span>Condominium Units</span>
      </div>
      <div className="condo-img-container">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117342252_122828126015575_8752799894244593831_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGywWI22cPpktjPny8athky0QfLtm4_geTRB8u2bj-B5LOkoM2cdsKsTprV2XAMZvQ&_nc_ohc=8OKiqRmgi1gAX-5g-5e&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfCtn3WPpmtXXmepKHpf0oXq4zkcyJMAy5FcEfuoep89Xg&oe=64C6351C"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/116957696_122829422682112_1567410242734176248_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEk97REnxH2xpp2kj2CMwV9sIyTpGjpMnOwjJOkaOkyc2NP7fQ9hyO1FNzZx5QhYWo&_nc_ohc=vg17J0diLTUAX_8dFP3&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfCniaEYlN9O5EDttsc_CSR-UVx42-tJaha8cKxPX0VZ2w&oe=64C625C6"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/117706452_122829249348796_6471872317464576509_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHhyj4YBID599CTWM7eL7mwrsVV9HChyDiuxVX0cKHIOPmEbY55Z47K61SIF1qImUE&_nc_ohc=viGqHwLgfPkAX8weqP-&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfCqocwDTCXT6R_507E4_-pSwzJNc5W_TocAn3hRj59cEA&oe=64C637F7"
          />
          <Image
            height={200}
            src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t1.6435-9/148328971_222306872734366_3151635361601907141_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGuE_KxF6mSjd4n3PcfVVigpKSMjgSk6Y-kpIyOBKTpjwuv1lGc5oaXmOuJ6Jj9H60&_nc_ohc=Ew-3HOW9EYEAX9tjU_k&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfAq5JdHhVWi--MbaC3wA3y1skh17aA63Ti4TMxkkU0NCQ&oe=64C64631"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/276127701_480069893624728_7446413894740278005_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEXPpohyrzAlF8kVV_Sw0Ooq6AiSlriWN6roCJKWuJY3gnk5tchdAricP8illB4cv0&_nc_ohc=_s4_fEVSBsAAX8cZfT3&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBllMx8N8KqRGTq2oD6Z_k3xictDWM_ZfGXTz4Bhqbdjg&oe=64A2D4AD"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117348279_122828479348873_382209049941099880_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHj_44vYBV9s6BrkuaHlVsSBhkUgpyU1Q0GGRSCnJTVDXOYftdarNXqLB4BksPI4GM&_nc_ohc=e--cw4QM68kAX_GeU62&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfDTCnan7Fjl1M3T9HXmRHQFIzO71JFxkRMQ9M7hsa4mvQ&oe=64C654A4"
          />
          <Image
            height={200}
            src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/268979431_421854322779619_3948207468249685173_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEDs179AOqNP2Co_qrvThia-RaHPYx-mE_5Foc9jH6YT0C25YmUIWJQd6Sda9wNKqk&_nc_ohc=-exCW5iELYUAX_HJtKs&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfCwxNsviwiFtWXcgQLCBY6OqClxFYHlhgnQbcdst2-9Rw&oe=64A47BEA"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117124789_122829306015457_8140715343948029387_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGdw75UAebHsZ4YFYB7MY9r7NIt1ndODwLs0i3Wd04PAgbTKYTW4cexSBakIaUyIp8&_nc_ohc=eKZMwwYGc4EAX_WqE2k&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfCAhX_EM_83cifKtaWRTYUDZNPZslIz3GhIchB1-mPbpQ&oe=64C64AC1"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/117239194_122829379348783_3118860569632107173_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGFPKXU_gzBeQfKVRfwUzlogg7_osHt2F-CDv-iwe3YXxO9t3WtKVNixjguGW_-gZg&_nc_ohc=a7XPsEnufLIAX8cFnUv&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfA7CySpIvRgSDI2wmaGnBu_nQLrY6BoOWBBMl5G9QimDg&oe=64C63E3D"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117445318_122829406015447_4710042263135294825_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFM1m_B3N9J6e_0KgdDdMSKlsdiOsqIDX2Wx2I6yogNffYwRiXvkM_ygqrX-a9L8vQ&_nc_ohc=2ZO12U4mKtkAX9eBone&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBlqCRaPEO6WqfS93stAbNnPd-1zGZlqjh1OB_gR4F4Ng&oe=64C62923"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117656313_122829299348791_7516825908438197350_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHvcs2_36Skqh9F82EhNcCkoDgirsgzcGagOCKuyDNwZii36UCVIPLvsO0zXppUmvo&_nc_ohc=HY6DhdMi-g8AX_uwn9k&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfDU6nqCpyXI5UIFFDJ7B1BWBOAjDiJZLxC9sozq2DArwQ&oe=64C620CC"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117312895_122829342682120_7201845656405130353_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFudNiBD7wa7vv-UzaU_kbUNw2BEYIKBA83DYERggoED2DP0Gwq0ZXHtXjnQOpQ3xg&_nc_ohc=e8Hw5ZK5GbAAX8Q6JjZ&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBruF1msOdUa1h5VqPpHW9mFCXKLEhDnDMAmHotKQQ_Gw&oe=64C63BEB"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/277295923_480068903624827_6668943116359632233_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGkPg-qFp0-sFVOwk9_D4sEoXWf2byj8bGhdZ_ZvKPxsQyudxv5hoq2g8TSWdMW5Zc&_nc_ohc=LArPs1Clbz4AX9pBcvB&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBGHTGTlgR-OMYJ5a3rzH_PWR2nLjAy-sjha7p8gcZLuA&oe=64A42EAD"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/268578189_421853839446334_747856357393720455_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGUHbvW-h5Dwx11AgSepzsm8oBa2x0BIBnygFrbHQEgGQ0Fe1ijxMCO8zAcr9NnLPs&_nc_ohc=L-9Dg6iK9LEAX87_zg6&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfBevwbFdOD7H-9t5r8-IeWOuzNmhM5huV9MJAZkzg5j2Q&oe=64A2FAAE"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/276233673_480068916958159_8266714971576113219_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGuStB5DfE0GDGHktv5b7QBtvqc2LTlTUa2-pzYtOVNRjcjix_WTpwb97BsghHKkco&_nc_ohc=uoQonQiS0tEAX8VrLgh&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfAz1uu6emVMIPsWNFnz9V5yfA44J-syfBki0VnUyV0f0Q&oe=64A3D5EC"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/268965532_421854209446297_3823023182499571266_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFezbr2Ls5KA1eghgfjxZ0_Tb4Q7NfubTVNvhDs1-5tNUjRog_3JtBDkG9PSaXEtgk&_nc_ohc=ulC6Wq2nnHAAX_3kJQg&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfBcRZizdzutCAiywmAlXhICfRJDz4XQ9HN0ausUrAteCw&oe=64A39CFA"
          />
        </Image.PreviewGroup>
      </div>
    </section>
  );
};

export default Condo;
