-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2024 at 12:42 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dtblog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `postID` int(11) NOT NULL,
  `postTitle` varchar(128) NOT NULL,
  `postImageURL` varchar(128) NOT NULL,
  `postContent` varchar(2000) NOT NULL,
  `postDate` varchar(32) NOT NULL,
  `postViews` int(32) NOT NULL,
  `postAuthor` varchar(128) NOT NULL,
  `postCategory` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`postID`, `postTitle`, `postImageURL`, `postContent`, `postDate`, `postViews`, `postAuthor`, `postCategory`) VALUES
(1, 'New VR Headsets That Will Shape the Metaverse', 'https://i.imgur.com/y0eBmd0.png', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus convallis lectus sem amet facilisis cubilia faucibus a. Iaculis velit imperdiet egestas laoreet ipsum risus efficitur. Per integer maecenas euismod duis lacinia fames. Class quam convallis lacinia pretium hendrerit turpis. Egestas porttitor fames a eleifend ridiculus rutrum. Hac ligula sem scelerisque lacinia aenean vestibulum erat. Facilisis maximus himenaeos imperdiet adipiscing venenatis elementum eget interdum.\r\n\r\nBlandit magna fames magnis gravida cursus pulvinar tempor. Magna lacus neque ut placerat duis, tristique aptent mauris libero. Sed augue venenatis nam nunc felis varius nam ligula. Litora turpis interdum sociosqu feugiat parturient in viverra. Erat euismod neque interdum orci arcu eget. Tellus erat primis et venenatis quisque mauris potenti? Taciti natoque ultricies lacinia praesent nullam nisl fermentum facilisi magna. Conubia imperdiet scelerisque natoque suscipit curabitur convallis. Himenaeos ornare felis integer lobortis interdum massa condimentum.\r\n\r\nVestibulum sapien penatibus; sagittis tempor urna nullam elementum elit. Dictum neque quisque tincidunt consectetur semper class, tristique lacinia? Nascetur nec sodales donec dapibus enim egestas consectetur. Nibh at turpis et venenatis fermentum ad maximus. Hendrerit dapibus molestie facilisi iaculis quisque nostra. Senectus natoque tellus libero dis dis ligula ultrices.\r\n\r\nEnim eros venenatis ultrices sapien consectetur fringilla faucibus. Senectus sed tempor ipsum litora nam urna est condimentum. Facilisis curae primis rhoncus mauris, penatibus auctor. Aptent condimentum ex suscipit risus porttitor maximus. Duis commodo nibh blandit libero enim sociosqu maximus. Avulputate mattis sem placerat imperdiet conubia. Ut felis accumsan ornare tortor nec tortor habitant. Ridiculus dictum vivamus eget at turpis curae!\r\n\r\nVehicula class sociosqu taciti litora ipsum. Molestie varius aliquet pretium magna ornare parturient. Morbi cras nisi tempus se', 'Jan 3, 2022', 3344, 'Dincer Tekin', 'Technology'),
(2, 'Augmented Reality Trends for 2022', 'https://i.imgur.com/hiVxFXn.png', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Per finibus duis ex, at torquent sit. Fringilla amet iaculis primis molestie pretium. Duis porttitor dapibus diam justo primis sollicitudin iaculis. Senectus nibh bibendum fermentum nullam nisl viverra. Venenatis hac erat tellus lacinia magnis; neque pretium eleifend. Congue feugiat netus et ridiculus nam. Maximus mauris volutpat consectetur eleifend sit urna fusce netus at. Malesuada neque in ipsum pulvinar egestas luctus purus. Pharetra sit viverra semper laoreet orci.\r\n\r\nMetus nostra facilisi tristique nec ullamcorper. Faucibus dis inceptos faucibus ad ipsum per. Ad himenaeos maecenas hac inceptos pretium. In nostra facilisi fringilla malesuada habitant taciti habitant. Blandit proin ac aenean lectus quam sapien accumsan venenatis. Sem non feugiat platea aliquam penatibus. Ut potenti egestas litora nec nibh nisl. Morbi viverra mi bibendum curae platea leo.\r\n\r\nEnim varius etiam ut blandit ac sem interdum interdum. Mi non nibh taciti potenti pretium. Augue lacus nascetur etiam mauris; interdum arcu. Cras cursus congue pellentesque consectetur turpis mollis ut. Hendrerit dolor fermentum primis nisi; convallis dapibus. Turpis tempor purus class interdum dis per aptent vel integer? Tellus vel torquent ullamcorper; euismod morbi integer.\r\n\r\nLorem penatibus finibus hac duis feugiat sem eleifend conubia. At torquent volutpat tempor magnis integer hac tempus quisque morbi. Quisque montes parturient felis proin ligula. Tempor taciti suspendisse vivamus sem risus leo finibus sem aptent. Nostra aptent fames, volutpat cursus elementum varius ad curabitur. Montes consequat dui taciti dictumst conubia. Augue leo magna vivamus, scelerisque montes maecenas mus lorem quisque. Libero consectetur venenatis iaculis maecenas efficitur pellentesque rhoncus.\r\n\r\nDiam felis metus suscipit placerat fusce. Metus nisl lacus fusce parturient; senectus rutrum eleifend. Phasellus magnis rutrum nisl netus semper senectus suscipit. Velit cubili', 'Jan 2, 2022', 6714, 'Dincer Tekin', 'Technology'),
(3, 'Stocks making the biggest moves midday: Tesla...', 'https://i.imgur.com/ckswaJP.png', 'Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus donec ligula egestas velit ipsum eget semper. Curabitur volutpat nunc consequat dapibus; massa mattis. Vehicula aptent ipsum efficitur fames mi pharetra in scelerisque. Consectetur elit vivamus curae ultricies dis sem tempus pellentesque. Litora velit inceptos volutpat pulvinar, erat mollis pellentesque blandit. Dolor netus malesuada dignissim aliquet; cras sagittis non. Netus bibendum phasellus; class ligula pellentesque suspendisse.\r\n\r\nDignissim massa felis nec laoreet himenaeos cras viverra. Molestie torquent mus interdum netus vitae sodales vitae. Penatibus suscipit ut nullam litora risus maximus. Convallis semper elit, facilisi dui sollicitudin viverra. Vulputate neque nulla pretium morbi non pellentesque inceptos. Bibendum class sit iaculis accumsan mus ac; odio fusce ad! Elit habitasse molestie tristique parturient natoque fringilla vehicula litora. Ornare purus quisque tincidunt potenti elit accumsan pulvinar conubia. Dignissim porta per sapien inceptos, libero curae. Libero risus sit sem et massa feugiat sem.\r\n\r\nEtiam mollis congue consectetur dapibus fames laoreet ligula. Orci placerat himenaeos laoreet duis torquent finibus. Vulputate lobortis nullam feugiat semper penatibus senectus rhoncus enim aliquam. Dictumst nam laoreet lacus euismod eu. Odio litora sed ad vehicula vehicula. Imperdiet interdum vitae congue justo sed maecenas mattis potenti. Ligula per curabitur donec facilisi sodales commodo. Ac mi a class nascetur morbi nisi. Bibendum elit porttitor ornare morbi ut aliquam viverra porta.\r\n\r\nLectus netus nullam felis faucibus etiam cubilia curabitur. Inceptos curae porta semper consequat lobortis placerat. Maximus laoreet habitasse libero mi conubia pretium. Luctus mattis ut litora rhoncus natoque. Magnis tristique netus ultrices suspendisse sem. Mattis blandit laoreet id ipsum condimentum diam. Aliquet mauris libero curabitur hac sem interdum.\r\n\r\nHendrerit nisl senectus finibus ultrices tor', 'Jan 1, 2022', 9823, 'Dincer Tekin', 'Business');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`postID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `postID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
