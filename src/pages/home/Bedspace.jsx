import { Image } from "antd";
import "./Bedspace.scss";

const Bedspace = () => {
  return (
    <section className="bedspace-container">
      <div className="bedspace-text-container">
        <span>Bedspace</span>
      </div>
      <div className="bedspace-img-container">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/117710593_122858349345886_5866922909714613112_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeH-Vtvt2qhx_yq7OVNxbcr_5uozBU1hE_nm6jMFTWET-eST-eUThHeVgIeCGZMvYG0&_nc_ohc=sKuEFj0PBwsAX_DbJnY&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfD_KpPnoSurvPG0qjv1T74BjJKpmTDmrShWihw4rrJo8Q&oe=64C6419A"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/328124797_596600462289684_7374104423598567392_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHg29KfqjMPfRBRxjHtCUMudDwPPJHfHTF0PA88kd8dMebaIMOPQ7vSnNUybF8v1Fs&_nc_ohc=emIUceJGno4AX-VuI93&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfA15-u5TPXoyCPxJ2yTxCET3tHiCR_m1sAx8HrNz_ub7g&oe=64A3AEB4"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/329939724_563530515826377_2565005947009380989_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEvZHNeTziuvv4TW_7QYUts3idH3qdOK2PeJ0fep04rY7wtQPNoGu8-sYiDpKgJOCk&_nc_ohc=FKVqSJzP5_oAX9Uw75q&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfB1xx__4p5V3XmXQqabOUBVu-0reua1dGSWo11JAhvVlg&oe=64A36B0E"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117645566_122858899345831_1808271553562171401_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHXWCuTSv8MvsG3zcqc4H-qPbe6Km32csA9t7oqbfZywC4bWiGijCUuGz1UXP3WruY&_nc_ohc=PyTs3iya4DcAX9Z7I-R&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBo4PaN0tduRNUyzJUnQ41i_pUWmtcSmvifyDNKeMIAxA&oe=64C633B2"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/329432986_862568281468734_7844158383457462659_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEmF5QCZs2PPrMSmnkq1hvcCXDKiEm-qoUJcMqISb6qhflLCoPH7r4S7kKYiGm43_U&_nc_ohc=saWUAxENG9oAX8glDM2&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBdCZZ8NWh7gOc0kxPlBqwBv1YCnM7viII8a-0qlxBLTg&oe=64A49A68"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/329914619_1119400248742442_8939760940007163624_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE3bKsV25sz3XoX0LF2NymC-yJ_w7pQc7j7In_DulBzuHIOZTGhYWvYSX3J3aGJ1TA&_nc_ohc=fnlxKvZnvVMAX-gx00q&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfB2SBXvmDYs9tEu_T-XFAaXR64aGb9hnKAXbNCQ51SsxQ&oe=64A36006"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/329618448_1224934618122108_8130933079481933746_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE5HrqhNu8MlRZpNBr7cwFAQDjPtWJyoXNAOM-1YnKhc0xPrrjpM90rQbNRLVXE3aU&_nc_ohc=0ZJO9DQsapUAX8pQEhc&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfA_dduhAg2EHZ-bZrlHxgHlLVrTRriqeix4PLXdgLqhpw&oe=64A483CC"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/117535627_122860912678963_4018997524846720931_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEeK9HkZjLQF4JhdqzC5oMfMD-Fr5JjY3EwP4WvkmNjcRSp3V9jz19eSwAYy5u1CAg&_nc_ohc=KuilQGEjEIcAX9vHLFf&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfAScUiAU8fzWo6tcQFLIdAkJev4n8hEWYEdU54quICLiQ&oe=64C62979"
          />
          <Image
            height={200}
            src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t1.6435-9/117339657_122861036012284_3464507578453545191_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeE5lbjdArgznFDcuFfzxiTtsj0AFc_dxCWyPQAVz93EJW6ntnqRjAIKLpk60ciyfho&_nc_ohc=PLrG4qoq984AX_Upmwn&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfArQq3r7Y2SN_BwsZ-TWFggrLnaKwxkmfbcqBiH_E_WJQ&oe=64C64BFB"
          />
          <Image
            height={200}
            src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t1.6435-9/117591289_122928086005579_1606688404020674943_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeF22YFYKHccYaRyhAnQa2EkuWhl9-7uvCG5aGX37u68IWAX5A4XWxF89MHGqg7kiEU&_nc_ohc=vwp7ht1hZOMAX-G_fOA&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfBs9rHULBIDUUisW5PfPMs6jSXEnhF62ukdI98meIrpvw&oe=64C632FC"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/117244906_122929072672147_3623817336768028840_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFxxChCyezMj3BiAwF2q61dqRqeUvo4bfqpGp5S-jht-pw8Tx4k4KCwpGQ14OEdirg&_nc_ohc=YIqNLhAlfVgAX_wgqjP&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDXvQ3zmagbIHLK8WLZG9JDicspok_-wKVgRsR6RQvcDg&oe=64C65572"
          />
          <Image
            height={200}
            src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t1.6435-9/117603547_122928732672181_6971962538304499258_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGlrt_TGpujT8vdy_PZKIDJYgLluRLCeuBiAuW5EsJ64OGWm8jnvlGFFJOpXWav1go&_nc_ohc=WTM_j2OlpzgAX_fzjoq&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfD30YcJPF1JOaJjVwV_Bx1lSZ1E5hGPSYda7yUha3DkjQ&oe=64C656C9"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/117300185_122928932672161_5757375947223417074_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEwSdBJY74gcUy7QspWcrvhpI3JJvc2OTekjckm9zY5N9-srDWyftjjl5aooOt_1Zc&_nc_ohc=8qMQfCOEDlIAX92tGwj&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfDj-8J57PW1rcFWwYkAh3SuUV5Pv2aty8p1LepWbeM-Qg&oe=64C62F11"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/117467232_122929032672151_1765024444040576984_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHQr12j4SLioMnc424nEDyC1nuqxRQkFlnWe6rFFCQWWUUIWSFXWXzl6bAvDa8Y84s&_nc_ohc=EdiTeWfhl6sAX8Jl7pW&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBxTNx2kmb4dGlixmPhQ67BzwLCDXenU8q2m4rmZcRL0w&oe=64C6436A"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/117252405_122929209338800_1669400091064643054_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeHztJ-MIDiXDHs9xpkaBYPrdalOM620eGl1qU4zrbR4ab0LEvyFMtNHQyf_Bu1juBk&_nc_ohc=wIPJDuzVlNMAX8z1N71&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfBed4R13TXhB0kNR2FvipLsS6NvO_bqX0zwPXO4ber7Yg&oe=64C65EF5"
          />
          <Image
            height={200}
            src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t1.6435-9/117030297_122984895999898_3408220348573946676_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGguYWtbu6lbQu0-buZYB_fhDhMtDtNpuKEOEy0O02m4gndoGX6EWw21IiFT3uQiy8&_nc_ohc=9B8Z5mbRa-8AX-57Tgi&_nc_ht=scontent.fmnl25-3.fna&oh=00_AfAPKhuzEmMoCP4KtOEakqoAHnhlka0yeodZbnP0c3Uw9Q&oe=64C63AB0"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/116903905_122942029337518_8568276843247264319_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeG2f8cUYl1kpz6AtVwV9t6JFSYIvwJ2JNgVJgi_AnYk2GM5P5BC5nGt2LNct9G5xPw&_nc_ohc=_pa8T7IyztEAX_cTm64&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfBVowQmKy6faGbtcw3OIN_QphnF9x_gjxzG6mWRIKZvCA&oe=64C6522E"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.6435-9/117300854_122941369337584_7218073349702680069_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeG17043vIp8iB9yS7VVJZFYoFKCfNaPIT-gUoJ81o8hP3xBHJcdmtWOaghhBWxagHg&_nc_ohc=AaQqkp7X7lQAX9UXb7U&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfBFLLIjNihHCo9qBVyh7vB0ODnNsqYRIXrg1oN1D7IBgg&oe=64C62A56"
          />
          <Image
            height={200}
            src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/329613428_2394704220702925_3944927624196451364_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEMqjOf65i6t7uBAa8fNzKd6OPgESGI58Do4-ARIYjnwNxr9QmLflMbpy3FR681RjM&_nc_ohc=MHIsYVv8hbQAX-dQ-7m&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfDoIPml-PVojnzEY8hvqwBNDu6yJCLlwsu4X90aXf7Sfg&oe=64A469BF"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/329297944_6157885437565781_4350099951747124811_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFfbpA_S3INgV0dh-3xfV94TUvR5OC7GvdNS9Hk4Lsa9_YQMj9fWV-zUEzZRFbkxJ8&_nc_ohc=9zEqBIbmakIAX-fb1VN&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfBKKygQpef9KilSQItKYlv_qY1P_5kYeIFOdDjHT8yOTw&oe=64A3151E"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/312800400_601679908631842_3483652034672361142_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHRzhv-hzw-6S2A5CNk8SnoRmfP_zuwfUNGZ8__O7B9Q5PWZvo8GZFZB8uXfIWBRsM&_nc_ohc=WPg84Zxqs6sAX84oJ_n&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfA4Un3Dbx6-e1JhZdVaY8q-ugHx6YqTOGVGAQxMh_l3Uw&oe=64A450E0"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/261778750_4611428355593606_3280490093382730465_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHB2sYr3ls9eOYc2RPJZjrxMGiRiaq-RuowaJGJqr5G6q32Ijk-xEgL4863w7YNV0c&_nc_ohc=EI0md2O6duMAX9IPJRb&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfD7ihZu9aOxyEX6eGIb3sWx-S5p5hOfdtllVBZaznmPMg&oe=64A38184"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.6435-9/109485531_3162248800511576_7459453805862370529_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEOtf1YTYfLzH60R7tefrdsGxNayGHhPLgbE1rIYeE8uJLDKeyFohEe7A_S6C7Sebc&_nc_ohc=NrTFl65z8F8AX9YuUcZ&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfAXjhJxD7g4DLXaiW6bCPR30UcfMH5Nxl5-XCDQzYoS6w&oe=64C64BE0"
          />
          <Image
            height={200}
            src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.6435-9/59722087_2245254688877663_298823625224486912_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHizdA6tP-2WYct7aMpElROgKgySjM40MCAqDJKMzjQwEy9QiYcUhJ5z59KexkbnFg&_nc_ohc=HCoWV1HvicYAX-tThcB&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfDQPuPrxWX0TMzmadLw4soxZrN8QeoZJkVqanSIGt1oZQ&oe=64C65453"
          />
        </Image.PreviewGroup>
      </div>
    </section>
  );
};

export default Bedspace;
