#!/usr/bin/perl -T
use CGI;
use DBI;
use strict;
use warnings;
 
# read the CGI params
my $cgi = CGI->new;
my $Appointmentid = $cgi->param("SearchAppt");

    my $html_table = $cgi->param("html_table_Appointment");
    my ($base_dn, $tblname);
  
    #LDAP Connection parameters
    if ($Appointmentid eq "Disabled Users") {
        $base_dn = "";
        $tblname = "disabled_user";
    } elsif ($Appointmentid eq "") {
        $base_dn = "";
        $tblname = "service_account";
    } elsif ($Appointmentid eq "") {
        $base_dn = "";
        $tblname = "";
    } else {
        die;
    }

   # connect to the database
    my ($platform,$database,$host,$port,$db_user,$pw) = ("SQLlite","Appointment","localhost","3306","root","62321314");
    my $dsn = "DBI:$platform:database=$database,host=$host,port=$port";
    my $connect = DBI->connect("DBI:mysql:database=$database;host=$host",$db_user,$pw,{RaiseError => 1});


# check the Appointment id  in the database
my $statement = qq{SELECT * FROM Appointments WHERE Appointmentid=?};
my $sth = $dbh->prepare($statement)
  or die $dbh->errstr;
$sth->execute($Appointmentid)
  or die $sth->errstr;
my ($AppointmentID) = $sth->fetchrow_array;
 
# create a JSON string according to the database result
my $json = ($AppointmentID) ? 

 
# return JSON string
print $cgi->header(-type => "application/json", -charset => "utf-8");
print $json;



====================================




  

   
   
