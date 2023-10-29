import React, { useState } from 'react';
import s from './WebsiteForms.module.scss';
import { InviteUserPopup } from 'components/dashboard/modals';
import { Pagination } from 'components/dashboard/content';

const partner_list = [
  {
    id: 1,
    status: 'active',
    name: 'Maria Newman',
    job_title: 'Supervisor',
    email: 'marianewman@gmail.com',
    phone: '+79393034057',
  },
];

///УВЕЛИЧИВАЕМ КОЛ-ВО ЭЛЕЕНТОВ(УДАЛИТЬ)
let partner = {
  id: 6,
  status: 'active',
  name: 'Maria Newman',
  job_title: 'Supervisor (it’s me)',
  email: 'marianewman@gmail.com',
  phone: '+79393034057',
};

for (let i = 1; i < 3; i++) {
  partner_list.push({
    ...partner,
    id: i,
    name: partner.name + ' ' + i,
  });
}

const WebsiteForms: React.FC = () => {
  const [openedInviteUserPopup, setOpenedInviteUserPopup] = useState(false);

  return (
    <>
      <section className={s.WebsiteForms}>
        <div className={s.Header}>
          <h1 className={s.Header_Title}>Website forms</h1>
        </div>

        <div className={s.Content}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            magni corrupti sint ipsum temporibus quasi fugit ut, ea quis id
            praesentium quaerat sapiente asperiores, laboriosam quo accusamus!
            Quaerat aperiam optio eaque culpa fugit, doloribus impedit ex
            perspiciatis deserunt cum libero velit neque rerum non esse alias.
            Odio nam quas pariatur minima aut dolore expedita hic, placeat, ex
            harum laudantium omnis esse cupiditate. In minima, distinctio maxime
            sapiente nobis explicabo inventore! Fugit expedita est commodi vitae
            possimus error consequatur provident id quia? Minima quasi quidem
            qui officia vitae, reprehenderit autem quod officiis nemo atque vero
            sunt, odit fugiat molestias. Rerum eius aut itaque dolore quo.
            Inventore vel laudantium, fugit facere aspernatur ex pariatur quam
            perspiciatis nisi voluptatum omnis officiis nulla quasi, itaque quas
            id doloremque cum? Quisquam accusamus atque suscipit temporibus
            consequuntur, optio velit molestiae cumque recusandae molestias.
            Soluta delectus atque expedita dicta amet ducimus repudiandae
            accusantium facilis minus laboriosam in quis officiis natus
            molestiae eum suscipit consectetur laudantium, ex id ullam sint!
            Illum voluptates architecto iusto velit voluptatem ea ipsa rerum?
            Unde optio quidem dicta ullam magnam consequuntur itaque, similique
            aut libero distinctio, exercitationem iste deserunt vitae,
            necessitatibus fugit repudiandae. Ab beatae nesciunt alias
            aspernatur doloribus voluptates magnam et fugiat quos eos corporis
            fugit nemo, amet vel, a molestias, iste numquam cum illo dolore?
            Animi quasi laborum dignissimos odio id! Quidem sit atque accusamus
            doloribus quis at fuga, tempore iste qui nesciunt facere vero error
            facilis enim necessitatibus aliquam, repudiandae illum numquam
            delectus doloremque impedit, ea quos ducimus! Placeat odio natus
            impedit, veniam consectetur corporis neque quam ab. Inventore eos
            dolorem incidunt delectus ratione commodi. Recusandae facere harum
            placeat odit doloribus quae voluptatum adipisci. Fugiat laboriosam
            illo laborum molestiae fugit error et ab fuga eius nostrum tempore
            excepturi, cupiditate doloribus vel, quo quae? Aliquam, dolor. Saepe
            rem error sapiente nobis! Delectus, cum eligendi. Nihil ex enim,
            labore error minima odit omnis blanditiis quasi commodi officia
            voluptatibus quam voluptatem maiores totam eaque sint deserunt
            maxime unde fugiat possimus laboriosam architecto dolorum placeat?
            Unde pariatur quam culpa hic, dolores perferendis! Aut nihil,
            numquam harum delectus id blanditiis corporis, deleniti expedita
            beatae odit deserunt inventore dolore aperiam ea iure sapiente
            nobis, maiores perferendis ducimus? Nostrum aut soluta a quo ab.
            Sint quam hic, expedita nihil tenetur quis commodi dignissimos quia
            ex nostrum provident deserunt voluptas excepturi quidem qui rem
            placeat facilis fugit, aperiam ab praesentium esse! Eligendi
            dignissimos animi hic maiores iste quis perspiciatis nam
            voluptatibus totam nostrum quaerat est voluptatum culpa iure, quia
            ipsum, et amet magni non fuga sint? Voluptates quam eius sequi quasi
            vel aliquam dolore repellendus odio natus dolor fugit doloremque
            similique ipsam temporibus earum officiis, tenetur qui harum nulla
            alias illo rerum officia? Tempore, at eaque nulla, et fugit quaerat
            quibusdam ipsa, mollitia optio impedit totam ratione beatae. Neque
            molestias reprehenderit ad ut temporibus cumque quia delectus odio
            sit odit maiores iure aliquid, laborum ratione quas incidunt autem
            saepe est natus perferendis et nostrum consequatur quisquam illo.
            Error facilis officia maxime ab minus nemo eum a vel asperiores
            accusantium esse dolorum autem dignissimos quod, earum laborum,
            blanditiis veritatis odio expedita iste corporis. Minus
            consequuntur, deserunt id natus perspiciatis quisquam deleniti
            accusantium numquam repudiandae sint labore culpa rerum? Eos fuga
            eius nisi modi corrupti. Minima at culpa vero quisquam quia placeat
            atque laboriosam tempore. Quo, voluptatem rem sapiente maxime est
            debitis quas voluptatum alias natus, iure odio ex culpa quidem
            sequi, sit doloribus id. Praesentium tempore architecto soluta
            mollitia adipisci esse ea! Incidunt distinctio iure accusantium
            ratione, perferendis minus. Voluptatibus, corrupti, perferendis
            corporis quas nisi earum nostrum quod expedita in soluta esse
            laborum molestiae quaerat ratione! Repudiandae unde aspernatur vel
            placeat, blanditiis quo aliquam nesciunt sapiente exercitationem
            eaque asperiores quibusdam, reiciendis dolorum molestiae, pariatur
            voluptate ea dicta laudantium eligendi rem. Modi distinctio rem
            obcaecati quo quisquam? Minus doloremque culpa error optio vitae!
            Cumque saepe aliquam repellat libero beatae eum, fugiat quaerat
            quis? Numquam, dignissimos at! Dolorem deleniti quos, repellendus ut
            veniam veritatis magni possimus molestiae nemo incidunt architecto
            cupiditate odio dolore earum, est iusto minus, dignissimos a ex quod
            fugit maxime alias. Aspernatur soluta amet excepturi corporis
            aperiam placeat modi consectetur sunt, corrupti earum officia
            repudiandae ipsa sint rerum exercitationem? Quam ut numquam, ipsam
            quidem dolore doloribus voluptatibus explicabo nisi commodi fuga
            autem vitae voluptatum. In dicta doloribus fugit aliquid error
            dolorem laudantium, quasi eligendi amet? Laboriosam laborum libero
            nesciunt, magni deleniti rerum quidem minima eaque commodi assumenda
            repudiandae quaerat voluptate perferendis amet, modi et vitae
            voluptates officiis dolorem consectetur. Quisquam voluptatibus
            voluptatem explicabo consequatur odit dolorum ipsa maiores fuga,
            praesentium eius minima suscipit corporis obcaecati rerum omnis
            ullam architecto odio. Distinctio, error excepturi fuga a delectus
            cupiditate libero harum vel nisi consectetur. Aliquid alias illum
            dolor velit. At rem dicta est perferendis placeat? Magnam nisi sed
            optio. Nulla dicta omnis ex molestias non animi autem quia
            voluptatibus voluptate? Odit natus accusantium eveniet dicta cumque
            nam officiis, aperiam delectus consequatur adipisci, et sint unde
            distinctio repellat molestiae deleniti molestias dignissimos
            repudiandae maxime in ex doloribus laborum nihil eum! Unde tempora
            corporis atque sequi perferendis adipisci, est quasi porro possimus
            doloremque maiores quibusdam nihil, dignissimos accusamus qui,
            laboriosam odio laborum necessitatibus eaque. Dignissimos vero,
            nihil corporis doloribus aliquid odit voluptates itaque atque,
            laborum voluptatem praesentium a assumenda accusantium ab?
            Voluptates ex fugit libero reprehenderit, aspernatur beatae
            assumenda facilis sed praesentium odit a dolorem voluptatem
            blanditiis minus cumque, nemo officiis molestias? Eligendi facilis
            doloremque blanditiis minus omnis illo reprehenderit corrupti, ullam
            harum porro deleniti aliquid debitis quia vero quasi eum, excepturi
            ut! Maxime in alias quae veritatis! Numquam soluta dicta, ut eos
            quia ullam a modi repellat sit quidem vel? Magni fuga iure
            repellendus mollitia ducimus sequi dolor cum, molestias fugit,
            dolore earum quisquam delectus. Autem nemo rem asperiores placeat
            tenetur enim unde eaque doloribus aperiam odit accusamus recusandae
            nobis ratione explicabo consectetur beatae doloremque repellendus,
            dolorem nesciunt. Dolorem qui eveniet nulla laudantium ullam neque
            tenetur veritatis! Necessitatibus facere harum qui provident debitis
            deserunt velit, rerum saepe laborum ducimus quisquam cupiditate
            delectus cumque eveniet nostrum sunt veritatis error blanditiis
            corrupti. Itaque aliquid molestiae eos magnam impedit sequi
            obcaecati voluptatibus ratione pariatur quas sunt sed temporibus
            perferendis tempora iure, at, harum dolorem quisquam fugit
            reprehenderit. Id omnis sapiente illum dolorem harum numquam ullam
            enim architecto ea, minima odit labore dicta aut optio repudiandae
            velit porro alias ratione nemo maiores perferendis iste? Est,
            praesentium! Aspernatur qui dolores repellat quibusdam quo?
            Molestiae incidunt enim similique unde, ipsa temporibus adipisci
            assumenda nam tempora tenetur rerum praesentium saepe fugit
            expedita, et sunt harum eveniet possimus numquam sit, quod optio
            illo pariatur. Maxime, sapiente. Quibusdam nulla rem incidunt autem
            minima sapiente commodi sunt, harum quidem ut culpa, at mollitia,
            blanditiis eum perspiciatis in. Laborum quaerat earum pariatur,
            illum, quia voluptates blanditiis, incidunt voluptatem a eum esse
            officia magnam. Ea molestias aspernatur hic illo, in totam. Odit,
            eaque? Fuga laboriosam labore consequatur voluptatem eaque veniam
            eligendi maxime harum natus amet beatae iure atque odit, eos quia in
            ex soluta sed libero. Alias, ullam quidem? Quas optio totam
            accusamus delectus corrupti voluptas quisquam laudantium.
            Voluptates, consequuntur? Non quis sed nesciunt ipsam ut vitae autem
            fuga aliquam! Omnis nobis, natus velit similique fuga animi! Ex
            voluptates vitae iure beatae nobis ipsam nostrum vero ea illum
            dolorum. Rerum molestias nemo, nulla alias architecto est molestiae
            dolorem possimus minima. Officia facilis incidunt temporibus debitis
            eum aliquam. Aut, alias nostrum eius provident accusantium, placeat
            et excepturi totam facilis expedita dignissimos velit nesciunt,
            similique repellendus temporibus optio eos veniam cupiditate. Earum
            repellendus similique laborum eius atque consequatur delectus
            eveniet nisi necessitatibus. Quas nihil veritatis velit ex ut rerum
            quisquam vitae non tempora error quaerat, incidunt, asperiores saepe
            labore eos totam modi corrupti! Atque inventore delectus eligendi
            sed porro veritatis suscipit libero aspernatur totam accusamus ipsum
            cum animi recusandae enim, error perferendis laudantium doloribus!
            Quod necessitatibus libero, ex eligendi dicta ipsa molestiae laborum
            totam nostrum sequi facilis minus animi dolor est amet reiciendis
            vel repellendus velit ab maiores laudantium commodi impedit omnis
            sit. Illo quos modi reiciendis rem, voluptates voluptatum
            consectetur quaerat consequatur consequuntur. Aut rerum modi
            voluptate reprehenderit unde vero rem! Reiciendis eum vitae
            similique quod voluptatibus laudantium delectus quo dignissimos!
            Repudiandae sint animi molestiae fugit illo quo mollitia ad, eaque,
            excepturi aspernatur alias deserunt id ab veniam magni tenetur
            inventore! Voluptatum eligendi iste facere ullam velit delectus
            culpa harum illo qui explicabo itaque temporibus, dolores
            consequuntur nobis sunt reiciendis, neque recusandae adipisci enim
            labore sequi architecto magnam unde suscipit. Asperiores consequatur
            minus dolor facilis eos quibusdam ullam. Consequuntur laboriosam,
            tenetur ab eaque architecto expedita harum. Similique aspernatur
            atque, ullam placeat dolorem consequatur? Tenetur quas repellat
            nobis neque quos soluta cumque illo fuga, voluptatibus quod quasi,
            minus excepturi qui quaerat accusamus nihil quisquam harum possimus
            vero delectus tempora unde quae beatae nulla. Qui dolorem laborum
            aliquid molestias ducimus! Atque quia sint blanditiis illo, amet
            placeat enim assumenda ea inventore. Voluptatem, quod tenetur ea
            voluptates aliquid dolore explicabo porro tempora rem asperiores
            recusandae saepe autem consequatur facilis aperiam, nobis modi
            quidem dolor qui, minima vel fugiat! Tempora placeat atque illo
            sapiente totam quae, adipisci nemo nesciunt, deserunt obcaecati
            repellendus rem fuga eos dolorem officia nulla? Molestiae fugiat est
            quia, earum nesciunt totam animi quasi dicta quam nemo laborum
            dolorem adipisci reprehenderit nulla voluptate enim fuga tempora
            voluptatum quis culpa eligendi minus dolorum quas optio. Quos in
            modi quam corrupti harum pariatur vero cum praesentium perferendis
            fuga ratione corporis aspernatur explicabo possimus deleniti ad
            laborum eos, dolores ut. Minus eaque culpa cupiditate nemo. Deleniti
            obcaecati necessitatibus ea autem totam nobis. Eos alias itaque
            animi, ad totam facilis incidunt blanditiis impedit temporibus odit
            accusamus voluptatibus provident repudiandae natus? Similique,
            delectus quasi. Autem mollitia vel unde perferendis dicta maiores
            magnam illo ad hic illum. Quia voluptatibus ut nam ex, laborum
            dolorem amet, voluptatem, quos pariatur tenetur blanditiis officia
            suscipit fugiat reprehenderit! Dolorum perspiciatis voluptatem
            tempore assumenda nostrum! Vel, at excepturi? Vero expedita
            laudantium architecto repellendus nulla quae eligendi ex tempore
            obcaecati repellat fugit, error consequuntur cumque blanditiis
            corporis laborum odio maiores necessitatibus quisquam! Consequatur
            amet, hic eveniet, error reiciendis quam aperiam, illum consequuntur
            voluptatibus accusamus aliquam voluptates sint. Nulla perferendis
            doloremque perspiciatis laborum deleniti repudiandae nemo
            cupiditate, velit autem mollitia at officiis quas dignissimos eaque
            ex repellat suscipit neque voluptas quisquam quae dolore quo esse
            nostrum. Molestiae iure architecto sit dolores inventore natus
            libero delectus incidunt. Laudantium numquam provident assumenda
            molestiae, nesciunt architecto eveniet quae doloremque pariatur,
            dolor laborum ullam quis repellendus? Facilis esse asperiores
            voluptatum suscipit odio, fuga fugit impedit ad ea vel ut, deserunt
            quaerat dolores sit omnis autem error numquam. Reprehenderit
            blanditiis incidunt velit accusamus perspiciatis laborum adipisci
            repudiandae nulla quisquam facilis! Sed tempore totam voluptates
            quaerat quia ducimus earum natus quod itaque, dolorum ex ullam
            debitis vero, id enim veniam possimus illo assumenda fugiat. Eum
            iusto sequi nesciunt nihil ipsum facere, quam deleniti fugit vel
            mollitia sapiente suscipit odio doloremque, laboriosam cupiditate
            nostrum repellendus porro ab libero hic necessitatibus magni
            laudantium voluptate sed? Doloremque sapiente laudantium
            reprehenderit inventore autem nostrum facilis ut nesciunt architecto
            officiis fugit dolore id, animi, voluptas quidem nemo sit totam
            debitis optio eveniet blanditiis. Omnis sed reiciendis atque beatae
            est totam cupiditate eligendi enim itaque obcaecati, hic vel quod
            ducimus sapiente delectus, sint quibusdam? Optio at suscipit
            distinctio ullam odit minima sint tempore excepturi quidem,
            molestiae sequi commodi voluptatem deleniti? Voluptates minima
            exercitationem sed dignissimos earum quasi illo perspiciatis
            corrupti ullam suscipit qui, impedit doloremque asperiores neque,
            quo delectus officiis, quia cupiditate aperiam quibusdam! Itaque
            doloribus, officiis praesentium id omnis placeat voluptas ratione
            fugiat saepe perspiciatis quae maxime nisi ex eum, harum modi nemo
            est obcaecati beatae voluptatum odit! Omnis provident porro minima
            possimus pariatur deserunt nulla repudiandae molestias impedit earum
            animi nisi, iste laborum, cum nesciunt similique velit voluptatem
            accusantium, quis quidem cupiditate officia. Incidunt molestiae
            consectetur nesciunt in recusandae. Vitae perferendis expedita culpa
            quam itaque, doloremque cupiditate molestiae consequatur dolore
            porro et! Aliquam, labore, nobis facere dolor explicabo dolorum vero
            incidunt veritatis dolorem harum suscipit provident. Cum delectus
            asperiores dolor maxime, magnam expedita molestias eaque distinctio
            hic impedit in quia corporis exercitationem adipisci accusamus neque
            fuga rem praesentium quo est veritatis. Ab blanditiis odio sapiente
            ipsam nobis at recusandae quis dolorum provident, corporis alias
            quod dolor commodi nostrum adipisci quidem deleniti voluptatibus?
            Accusantium aut quia iure, doloremque fuga beatae harum? Quia facere
            esse quae iure natus quos inventore consequatur qui voluptatem? Nisi
            numquam dolor vero nesciunt sequi error impedit sapiente voluptas
            alias ut quidem hic corrupti maxime odio quaerat enim illum quis,
            nihil expedita officiis inventore accusamus saepe accusantium. Atque
            autem eos animi voluptatibus cupiditate culpa odit veritatis
            incidunt vitae. Labore dolores dolore porro maxime repellendus cum,
            nemo eaque nostrum cupiditate illo, consectetur deserunt
            voluptatibus laudantium vel? Sapiente nam molestiae illo beatae,
            error eum laborum velit laboriosam doloremque dicta cum eos rem a
            iste pariatur totam dolorem. Blanditiis vero asperiores, porro
            nesciunt praesentium rerum esse sint commodi recusandae ipsam
            voluptates nobis! At deleniti nihil quam? Dignissimos iste harum
            incidunt ullam voluptas aperiam quae dolorem esse quidem
            perspiciatis ut voluptatum qui illo commodi neque accusantium modi
            consequatur praesentium, placeat soluta impedit eum. Expedita atque
            autem harum minima pariatur in sapiente praesentium ab quia unde
            saepe debitis facilis laborum, officiis fugit veritatis perspiciatis
            modi voluptatem accusamus alias est, eligendi repellat, tempore
            natus. Amet error facere fuga magni fugit ipsa tempore mollitia
            soluta totam, distinctio accusantium! Numquam veritatis aperiam at
            veniam non consectetur ratione, aspernatur amet? Eligendi quae, unde
            perferendis dolorum doloremque saepe at numquam quibusdam neque ab
            non illum quod officiis sed earum a animi? Adipisci officia aliquam
            natus recusandae ipsa dicta eos nobis, minima vel suscipit nostrum
            fugit nam necessitatibus pariatur tempore iusto totam aspernatur
            rem, error itaque exercitationem, voluptates laboriosam assumenda?
            Culpa possimus, eum quisquam et tempora quae repellendus ex placeat
            fugiat consequatur sint voluptatibus est quas voluptas hic eaque
            dolorum assumenda ullam totam tempore illo. Dolores asperiores
            cumque veritatis repudiandae. Necessitatibus, sunt incidunt
            provident omnis ut facere?
          </p>
        </div>
      </section>

      <Pagination />

      {/* МОБИЛЬНЫЙ ФИЛЬТР */}
      <InviteUserPopup
        opened={openedInviteUserPopup}
        onClick={setOpenedInviteUserPopup}
        onClick2={() => alert('Invite user')}
      />
    </>
  );
};

export default WebsiteForms;
