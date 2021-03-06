const infos = [
  {
    one: "Салхи бол ерөнхийдөө\n агаарын урсгал юм.",
    two: "Салхин цахилгаан станц нь\n салхины эрчим хүч үйлдвэрлэх зориулалттай\n газар юм. ",
    three: "Хамгийн хямд\n цахилгаан үүсгэвэр нь\n cалхи юм.",
    four: "Салхины эрчим хүч нь\n салхины механик хүч эсвэл\n цахилгаан эрчим хүчийг бий\n болгоход ашигладаг үйл\n явцыг тодорхойлдог. ",
    five: "Салхин үүсгүүр нь салхины\n кинетик энергиэр хөдөлдөг\n эрчим хүч үйлдвэрлэх\n төхөөрөмж юм. ",
    six: "Салхи хамгийн ихдээ 59.3 хувийн энерги боловсруулдаг.",
  },
  {
    one: "Гэрлийг шууд цахилгаан\n болгон хувиргадаг\n фотоволтайк (PV)",
    two: "Нарны эрчим хүчийг\n баяжуулах (CSP) нь\n нарны дулааныг\n (дулааны эрчим хүч)\n ашигладаг бөгөөд\n хэрэглээний хэмжээний\n цахилгаан турбиныг\n жолоодох",
    three: "нарны халаалт,\n хөргөлтийн (SHC)\n системүүд нь цуглуулдаг",
    four: "Нарны эрчим хүчний\n талаар ярихдаа энэ нь\n нарнаас гаралтай тул\n шавхагдашгүй, сэргээгдэх\n эх үүсвэр гэдгийг баталж\n болох бөгөөд ингэснээр\n энэ нь дуусах вий гэсэн\n болгоомжлол арилдаг.",
    five: "Нарны эрчим хүчний\n хамгийн чухал давуу\n талуудын нэг бол түүнийг\n ашиглахад бохирдуулагч\n хий үүсгэдэггүй тул\n бусдаас хамаагүй илүү\n цэвэр байдаг. Энэ нь\n экосистемийг хамгаалдаг\n тул байгаль орчинд хувь\n нэмрээ оруулахаас гадна\n уур амьсгалын өөрчлөлт,\n хүлэмжийн нөлөөний\n эсрэг тэмцэхэд тусалдаг.",
    six: "Нарны энерги нь ашигт\n малтмалын түлш\n ашиглахтай харьцуулж\n үзэхэд мөнгийг олон\n талаар бууруулахыг\n илэрхийлдэг.\n Нарны эрчим хүчийг\n хадгалах, түгээх, өөрчлөх\n чиглэлээр технологи\n хөгжихийн хэрээр\n мөнгөн хуримтлал\n нэмэгдэж байна.",
    seven:
      "Цахилгааны төлбөрийн\n бууралт нь энэхүү эрчим\n хүчийг одоо болон\n ирээдүйд хамгийн\n тогтвортой эрчим хүчний\n нэг болгож байна. Учир\n нь түүний\n үйлдвэрлэлийн зардал\n буурч, нарны зай\n хураагуур, хоолой болон\n бусад байгууламжийн\n засвар үйлчилгээ багасч\n байна.",
    eight:
      "Нарны энергийг олон\n янзаар, хязгааргүй\n байдлаар, өдөр тутмын\n амьдралыг хөнгөвчлөх\n бусад эрчим хүч\n үйлдвэрлэх, хувиргах\n байгууламж эсвэл\n системээр дамжуулан\n ашиглаж болно.\n Тэд хэдийгээр\n автомашин, хиймэл\n дагуулын салбар зэрэг\n томоохон аж үйлдвэрийн\n төслүүдийг сурталчилж\n болно.",
    nine: "Үүний нэг жишээ бол\n нарны дулааныг байшин\n халаахад ашигладаг\n шингэнийг халаах\n боломжийг олгодог\n нарны дулааны систем\n юм.",
    ten: "Нарны энерги бол\n шавхагдашгүй бөгөөд\n өөрчлөгдөж байдаг эх\n үүсвэр бөгөөд энэ нь\n олон оронд тусгаар\n тогтнолоо олж авах арга\n зам гэж улам бүр\n нэмэгдэж байгаа бөгөөд\n ялангуяа энэхүү түлшний\n зарцуулалтаас илүү цэвэр\n бөгөөд хязгааргүй\n энергийг ашиглах зардал\n буурч байгаатай\n холбоотой юм",
    eleven:
      "Эхэндээ, уг системийг\n суурилуулахын тулд\n ихэвчлэн гэрт\n суурилуулахыг зөвлөдөг\n самбар дээр батерей\n нэмж оруулсан\n тохиолдолд өндөр\n хөрөнгө оруулалт\n шаардагдана.",
    twelve:
      "Одоогийн байдлаар\n нарны цахилгаан\n станцуудыг цөл эсвэл\n хагас цөлийн уур\n амьсгалд суурилуулсан\n бөгөөд энэ нь хүний\n ​​оролцоо, тэнд байгаа\n материаллаг\n элементүүдийн\n нөлөөгөөр өөрчлөгдөж\n байдаг эмзэг экосистем\n юм.",
    thirteen:
      "Энэ нь их хэмжээний ус\n хэрэглэдэг, суурилуулсан\n газарт худаг эсвэл уст\n давхаргад нөлөөлдөг\n баяжуулалтын системд\n тохиолддог.",
    fourteen:
      "Нарны энерги нь нар\n болон хэд хэдэн хүчин\n зүйлээс хамаардаг тул\n энэ энерги тогтмол байх\n болно.\n Эдгээрээс уур амьсгал,\n өргөрөг, хүрээлэн буй\n орчны нөхцлийн дагуу\n өвчлөл онцгой харагдаж\n байна.",
    fifteen:
      "Хэрэв цаг агаар үүлэрхэг\n байвал нарны цацрагийн\n эрч хүч бага байх бөгөөд\n энерги нь ижил\n харьцаатай байх болно.\n Өргөргийн хувьд үүнтэй\n төстэй зүйл тохиолдох\n болно: энэ нь гадаргуу\n дээрх нарны цацрагийн\n өөрчлөлтийг бий\n болгоно.",
    sixteen:
      "Нарны эрчим хүчний гол\n сул талуудын нэг нь уг\n системийг суурилуулахад\n өргөн цар хүрээтэй газар\n ашиглах шаардлагатай\n байдаг.",
    seventeen:
      "Эцэст нь нарны зай\n хураагуур хийхэд\n ашигласан материалыг\n ашиглалтын хугацаа\n дуусмагц дахин\n боловсруулах буюу дахин\n ашиглах чиглэлээр\n компаниуд хийж байгаа\n судалгааг онцлох нь\n чухал юм.",
  },
  {
    one: "Усан цахилгаан станц\n нь усны хөдөлгөөнд\n агуулагдах эрчим хүч\n юм",
    two: "Усан цахилгаан станц нь\n цахилгаан эрчим хүч\n үйлдвэрлэхэд ашигладаг\n эрчим хүчний анхны эх\n үүсвэрүүдийн нэг байсан\n бөгөөд 2019 он хүртэл АНУ-\nын жилийн сэргээгдэх\n эрчим хүчний\n үйлдвэрлэлийн хамгийн\n том эх үүсвэр нь усан\n цахилгаан станц байсан\n юм.",
    three:
      "хөдөлгөөний энерги нь\n уснаас эрчим хүч\n үйлдвэрлэх үндсэн элемэнт\n болдог бөгөөд энэ нь\n тухайн бүс нутгийн цаг уур,\n усны урсац, газарзүйн\n болон геодизийн нөхцлөөс\n хамаардаг. ",
    four: " Энэ нь усны эх\n үүсвэрийн таталцлын\n потенциал буюу кинетик\n энергийг эрчим хүч\n үйлдвэрлэхэд хувиргаснаар\n хүрдэг. Усан цахилгаан\n станц нь тогтвортой эрчим\n хүч үйлдвэрлэх арга юм.",
    five: "усны эрчим хүч гэж\n нэрлэгддэг бөгөөд\n цахилгаан эрчим хүч\n үйлдвэрлэх эсвэл машиныг\n ажиллуулахад унах эсвэл\n хурдан урсах усыг ашиглах\n явдал юм. ",
    six: "Урсгалын энерги нь\n гол мөрөн эсвэл далайг ашиглаж \n цахилгаан үйлдвэрлэдэг.",
    seven:
      "Усан цахилгаан станцад\n усны урсгалын\n потенциал, кинетик\n энергийг турбины\n механик энергиэр\n дамжуулан генераторт\n цахилгаан энергид\n хувиргах хувиргалт\n хийгдэнэ.",
  },
  {
    one: "Геотерм буюу газрын\n хэвлийн дулаан нь эх\n газрын гадарга доор\n хуримтлагдсан дулаан юм.\n Энэ нэг ёсондоо газар доор\n хадгалсан сэргээгдэх эрчим\n хүч гэсэн үг бөгөөд энэхүү\n дулааны энергийг авч\n ашиглах боломжтой юм",
    two: "-Лаавын урсгал, гейзер\n -фумарол\n -халуун рашаан\n\n Эдгээр нь газрын гүний\n дулааны энергийн\n байгалийн үзэгдэл юм. ",
    three:
      "Тухайлбал, халуун\n рашааныг газрын гүний\n дулаанаар халаадаг. Ус\n дэлхийн царцдасын гүн дэх\n халуун чулуулагтай\n шүргэлцэх үед гадаргуу\n дээр гарч булаг үүсгэдэг.",
    four: "Ханхүү Пьеро Жинори\n Конти\n 1904. Ханхүү Пьеро Жинори\n Конти Италийн Тоскани\n дахь Лардерелло хуурай\n уурын талбайд анхны\n газрын гүний дулааны\n цахилгаан станцыг зохион\n бүтээжээ.",
    five: "Газрын гүний дулааны\n энерги нь дэлхийн доторх\n дулааныг хэлнэ",
    six: "Энэ нь хоол хийх, усанд\n орох, халаахад ашиглаж\n болох өөр эрчим хүчний эх\n үүсвэр юм.",
    seven:
      "Үүнийг мөн цахилгаан\n болгон хувиргах\n боломжтой.\n Газрын гүний дулааны\n энерги нь дэлхийн гадаргын\n аль ч хэсэгт байдаг.",
    eight:
      "Дэлхийн цөм дэх халуун\n чулуулаг нь уур, даралтаар\n дэлхийн гадаргууг\n ялгаруулдаг.",
    nine: "Бид энэ уурыг ажиллуулж\n, цахилгаан эрчим хүч\n үйлдвэрлэхэд ашигладаг.",
  },
];
