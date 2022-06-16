-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2021 at 04:20 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alumnidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `profileImage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `password`, `fullName`, `profileImage`) VALUES
('kinzashaikh38@gmail.com', 'kinza123', 'Kinza Kiran', 'None'),
('nadirhussaintumrani@gmail.com', 'nadir123', 'Nadir Hussain', 'None'),
('zakir@gmail.com', 'zakir123', 'Zakir', 'FDrive');

-- --------------------------------------------------------

--
-- Table structure for table `alumni`
--

CREATE TABLE `alumni` (
  `cmsId` varchar(12) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `department` varchar(100) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `address` varchar(200) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `profileImage` varchar(250) NOT NULL,
  `skills` longtext NOT NULL,
  `education` varchar(250) NOT NULL,
  `isHired` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alumni`
--

INSERT INTO `alumni` (`cmsId`, `fullName`, `email`, `department`, `gender`, `dateOfBirth`, `address`, `contact`, `profileImage`, `skills`, `education`, `isHired`) VALUES
('023-13-0025', 'Khalid Hussain', 'khalid.hussain@gmail.com', 'Software Engineering', 'Male', '1989-10-22', 'Nawabshah, Sindh', '03151390617', '023-13-0025.png', 'HTML,CSS,Javascript,React', 'BS Software Engineering,MS Software Engineering', 1),
('023-18-0014', 'Rizwan', 'rizwan@gmail.com', 'Computer Science', 'Male', '1998-12-31', 'Sukkur IBA', '03151390617', '023-18-0014.jpg', 'Angular,Ember,Information Architecture', 'BS Software Engineering', 1),
('023-18-0022', 'Noman', 'noman@gmail.com', '', 'Male', '2000-07-20', 'Karachi', '036985214711', '023-18-0022.jpg', 'Ember,CSS,Javascript,Meteor', 'BS Computer Science', 0),
('023-18-0025', 'Nadir', 'nadir@gmail.com', 'Computer Science', 'Male', '2000-02-05', 'Khairpur Mirs, Sindh, Pakistan', '03151390617', '023-18-0025.jpg', 'React,NodeJS,Python,Javascript,HTML,Graphic Design,CSS', 'BS Computer Science', 1),
('023-18-0031', 'Zeeshan', 'zeeshan@gmail.com', 'Computer Science', 'Male', '1998-12-31', 'Larkano', '03147859685', '023-18-0031.jpg', '', 'BS Software Engineering', 0),
('023-18-0055', 'Hans Raj', 'hans@gmail.com', 'Computer Science', 'Male', '2001-11-28', 'Lahore', '03965874125', '023-18-0055.jpg', 'Ember,CSS,Javascript', 'BS Software Engineering', 0),
('023-21-0011', 'Anum', 'anum@gmail.com', 'Software Engineering', 'Female', '2004-09-05', 'Sukkur', '0312148774', '023-21-0011.jpg', 'Graphic Design', 'BS Software Engineering', 0),
('053-18-0011', 'Kinza', 'kinza@gmail.com', 'Software Engineering', 'Female', '2000-07-18', 'Sukkur IBA University', '03147852369', '053-18-0011.jpg', 'Ember,CSS,Javascript,HTML,Meteor', 'BS Mathematics,MS Software Engineering', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `alumni`
--
ALTER TABLE `alumni`
  ADD PRIMARY KEY (`cmsId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
